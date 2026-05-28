#requires -Version 5.1
<#
.SYNOPSIS
  Upload all /public/audio MP3s to a Cloudflare R2 bucket, preserving the
  audio/<section>/<file>.mp3 key structure used by lib/audio.ts.

.PREREQUISITES
  1. Cloudflare account with R2 enabled (free tier: 10GB storage / 1M ops per month).
  2. R2 bucket created. Public access enabled OR a custom domain attached.
  3. Wrangler CLI installed and authenticated:
       npm install -g wrangler
       wrangler login

.USAGE
  cd "c:\Users\user\OneDrive\Documents\New project\AI-OS\awakened-academy\aa-site"
  ./scripts/upload-audio-r2.ps1 -BucketName your-bucket-name

.NOTES
  After upload, set NEXT_PUBLIC_AUDIO_CDN in Vercel to the bucket's public URL
  (e.g. https://pub-xxxxxxxx.r2.dev or https://cdn.awakenedacademy.com).
#>
param(
  [Parameter(Mandatory = $true)]
  [string]$BucketName
)

$ErrorActionPreference = 'Stop'

$audioRoot = Join-Path $PSScriptRoot '..\public\audio'
if (-not (Test-Path $audioRoot)) {
  throw "Audio folder not found at $audioRoot"
}

$files = Get-ChildItem -Path $audioRoot -Recurse -Filter *.mp3
if ($files.Count -eq 0) {
  throw "No MP3 files found under $audioRoot"
}

Write-Host "Found $($files.Count) MP3 files. Uploading to R2 bucket '$BucketName'..."
Write-Host ""

$uploaded = 0
$failed = @()
foreach ($file in $files) {
  # Derive key: audio/miracle/foo.mp3 from public/audio/miracle/foo.mp3
  $relative = $file.FullName.Substring($audioRoot.Length + 1) -replace '\\', '/'
  $key = "audio/$relative"

  # Skip files that look like LFS pointers (under 1KB and start with "version https")
  if ($file.Length -lt 1024) {
    $head = Get-Content $file.FullName -TotalCount 1 -ErrorAction SilentlyContinue
    if ($head -match '^version https://git-lfs') {
      Write-Warning "SKIP $key — LFS pointer, not hydrated. Run 'git lfs pull' first."
      $failed += $key
      continue
    }
  }

  Write-Host "  -> $key  ($([math]::Round($file.Length / 1MB, 1)) MB)"
  & wrangler r2 object put "$BucketName/$key" --file $file.FullName --content-type "audio/mpeg" 2>&1 | Out-Null
  if ($LASTEXITCODE -ne 0) {
    Write-Warning "FAIL $key"
    $failed += $key
  } else {
    $uploaded++
  }
}

Write-Host ""
Write-Host "Uploaded: $uploaded / $($files.Count)"
if ($failed.Count -gt 0) {
  Write-Host "Failed:"
  $failed | ForEach-Object { Write-Host "  - $_" }
  exit 1
}

Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. In Vercel project settings, add env var:"
Write-Host "       NEXT_PUBLIC_AUDIO_CDN=https://<your-bucket-public-url>"
Write-Host "  2. Redeploy."
Write-Host "  3. Verify one file plays at /miracle and /meditations."
