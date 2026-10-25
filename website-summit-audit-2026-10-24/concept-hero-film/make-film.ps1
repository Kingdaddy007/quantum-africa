$ErrorActionPreference = 'Stop'
$studyRoot = $PSScriptRoot
$sourceRoot = Join-Path (Split-Path $studyRoot -Parent) 'assets\media'
$assetRoot = Join-Path $studyRoot 'assets'
$clips = @('people-and-property.mp4','robotics.mp4','property.mp4')
for ($clipIndex = 0; $clipIndex -lt $clips.Count; $clipIndex++) {
  $inputFile = Join-Path $sourceRoot $clips[$clipIndex]
  $outputFile = Join-Path $assetRoot ('hero-part-' + $clipIndex + '.mp4')
  & ffmpeg -hide_banner -loglevel error -y -i $inputFile -t 4 -an -vf 'fps=24,scale=720:1280,setsar=1' -c:v libx264 -preset fast -crf 24 -pix_fmt yuv420p -threads 2 -movflags +faststart $outputFile
  if ($LASTEXITCODE -ne 0) { throw "Film segment failed: $inputFile" }
}
$concatFile = Join-Path $assetRoot 'hero-concat.txt'
@("file 'hero-part-0.mp4'", "file 'hero-part-1.mp4'", "file 'hero-part-2.mp4'") | Set-Content -LiteralPath $concatFile -Encoding ascii
& ffmpeg -hide_banner -loglevel error -y -f concat -safe 0 -i $concatFile -c copy -movflags +faststart (Join-Path $assetRoot 'hero-film.mp4')
if ($LASTEXITCODE -ne 0) { throw 'Film concatenation failed' }
& ffmpeg -hide_banner -loglevel error -y -i (Join-Path $assetRoot 'hero-film.mp4') -frames:v 1 -q:v 2 (Join-Path $assetRoot 'hero-poster.jpg')
if ($LASTEXITCODE -ne 0) { throw 'Poster extraction failed' }
Get-Item -LiteralPath (Join-Path $assetRoot 'hero-film.mp4'),(Join-Path $assetRoot 'hero-poster.jpg') | Select-Object Name,Length
