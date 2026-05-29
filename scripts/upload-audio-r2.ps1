# Upload all public/audio MP3s to a Cloudflare R2 bucket via wrangler.
# Usage: ./scripts/upload-audio-r2.ps1 -BucketName aa-audio
param(
  [Parameter(Mandatory = $true)]
  [string]$BucketName
)

$ErrorActionPreference = 'Stop'

$audioRoot = Join-Path $PSScriptRoot '..\public\audio'
if (-not (Test-Path $audioRoot)) {
  throw "Audio folder not found at $audioRoot"
}
$audioRoot = (Resolve-Path $audioRoot).Path

$files = Get-ChildItem -Path $audioRoot -Recurse -Filter *.mp3
if ($files.Count -eq 0) {
  throw "No MP3 files found under $audioRoot"
}

Write-Host ("Found {0} MP3 files. Uploading to R2 bucket '{1}'..." -f $files.Count, $BucketName)
Write-Host ""

$uploaded = 0
$failed = @()

foreach ($file in $files) {
  $relative = $file.FullName.Substring($audioRoot.Length + 1).Replace('\', '/')
  $key = "audio/" + $relative
  $sizeMB = [math]::Round($file.Length / 1048576, 1)

  if ($file.Length -lt 1024) {
    $head = Get-Content $file.FullName -TotalCount 1 -ErrorAction SilentlyContinue
    if ($head -match '^version https') {
      Write-Warning ("SKIP {0} - LFS pointer, not hydrated. Run 'git lfs pull' first." -f $key)
      $failed += $key
      continue
    }
  }

  Write-Host ("  -> {0}  ({1} MB)" -f $key, $sizeMB)
  $output = & wrangler r2 object put "$BucketName/$key" --file $file.FullName --content-type "audio/mpeg" --remote --force 2>&1
  if ($LASTEXITCODE -ne 0) {
    Write-Warning ("FAIL {0}" -f $key)
    Write-Host ($output | Out-String)
    $failed += $key
  } else {
    $uploaded++
  }
}

Write-Host ""
Write-Host ("Uploaded: {0} / {1}" -f $uploaded, $files.Count)
if ($failed.Count -gt 0) {
  Write-Host "Failed:"
  $failed | ForEach-Object { Write-Host ("  - {0}" -f $_) }
  exit 1
}

Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. In Vercel project settings, add env var:"
Write-Host "       NEXT_PUBLIC_AUDIO_CDN=https://pub-<your-hash>.r2.dev"
Write-Host "  2. Redeploy."
Write-Host "  3. Verify one file plays at /miracle and /meditations."
