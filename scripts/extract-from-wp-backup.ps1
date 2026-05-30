# Extracts MP3s from the WordPress backup zip into public/audio/<folder>/<file>
# per scripts/audio-migration-manifest.csv. Idempotent: skips files that
# already exist at the destination. HOLD rows are never extracted.
#
# Usage:
#   ./scripts/extract-from-wp-backup.ps1                  # dry run, lists what would be done
#   ./scripts/extract-from-wp-backup.ps1 -Execute         # actually extract
#   ./scripts/extract-from-wp-backup.ps1 -Execute -ZipPath "C:\path\to\backup.zip"
#
# After this runs, run scripts/upload-audio-r2.ps1 to push the new files to R2.
param(
  [switch]$Execute,
  [string]$ZipPath = "$HOME\Downloads\awakenedacademy_com.zip",
  [string]$ManifestPath = "$PSScriptRoot\audio-migration-manifest.csv"
)

$ErrorActionPreference = 'Stop'

if (-not (Test-Path $ZipPath)) {
  throw "Backup zip not found: $ZipPath"
}
if (-not (Test-Path $ManifestPath)) {
  throw "Manifest not found: $ManifestPath"
}

$audioRoot = Resolve-Path (Join-Path $PSScriptRoot '..\public\audio')
$manifest = Import-Csv $ManifestPath

$copyRows = @($manifest | Where-Object { $_.status -eq 'COPY' })
$holdRows = @($manifest | Where-Object { $_.status -eq 'HOLD' })

Write-Host ("Manifest: {0} COPY, {1} HOLD" -f $copyRows.Count, $holdRows.Count)
Write-Host ("Backup zip: {0}" -f $ZipPath)
Write-Host ("Audio root: {0}" -f $audioRoot)
Write-Host ("Mode: {0}" -f $(if ($Execute) { 'EXECUTE' } else { 'DRY RUN (pass -Execute to copy)' }))
Write-Host ""

# Open the zip once and reuse the handle
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($ZipPath)
try {
  $toCopy = 0
  $alreadyPresent = 0
  $missingInZip = @()
  $copied = 0
  $copiedBytes = 0L

  foreach ($row in $copyRows) {
    $destDir = Join-Path $audioRoot $row.target_folder
    $destFile = Join-Path $destDir $row.target_filename
    $srcKey = $row.source_path_in_zip -replace '\\','/'

    if (Test-Path $destFile) {
      Write-Host ("  SKIP (already present): {0}/{1}" -f $row.target_folder, $row.target_filename)
      $alreadyPresent++
      continue
    }

    $entry = $zip.Entries | Where-Object { $_.FullName -eq $srcKey } | Select-Object -First 1
    if (-not $entry) {
      Write-Warning ("  MISSING IN ZIP: {0}" -f $srcKey)
      $missingInZip += $srcKey
      continue
    }

    $sizeMB = [math]::Round($entry.Length / 1048576, 1)
    Write-Host ("  COPY {0}/{1}  ({2} MB)" -f $row.target_folder, $row.target_filename, $sizeMB)
    $toCopy++

    if ($Execute) {
      if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
      }
      $stream = $entry.Open()
      try {
        $out = [System.IO.File]::Create($destFile)
        try { $stream.CopyTo($out) } finally { $out.Dispose() }
      } finally {
        $stream.Dispose()
      }
      $copied++
      $copiedBytes += $entry.Length
    }
  }

  Write-Host ""
  Write-Host "--- Summary ---"
  Write-Host ("  Already present: {0}" -f $alreadyPresent)
  Write-Host ("  Would copy (or copied): {0}" -f $toCopy)
  if ($Execute) {
    $copiedMB = [math]::Round($copiedBytes / 1048576, 1)
    Write-Host ("  Copied this run: {0} ({1} MB)" -f $copied, $copiedMB)
  }
  Write-Host ("  HOLD rows in manifest (skipped): {0}" -f $holdRows.Count)
  if ($missingInZip.Count -gt 0) {
    Write-Warning ("  MISSING IN ZIP: {0} -- manifest source_path_in_zip does not match a zip entry" -f $missingInZip.Count)
    $missingInZip | ForEach-Object { Write-Host ("    - {0}" -f $_) }
  }

  if (-not $Execute) {
    Write-Host ""
    Write-Host "Dry run only. Re-run with -Execute to perform the copy."
  } else {
    Write-Host ""
    Write-Host 'Next: run scripts/upload-audio-r2.ps1 -BucketName aa-audio to push the new files to R2.'
  }
} finally {
  $zip.Dispose()
}
