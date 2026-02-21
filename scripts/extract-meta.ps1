$base = "$PSScriptRoot\..\app"
$out = @()
Get-ChildItem $base -Recurse -Filter "page.tsx" | Where-Object {
  $_.FullName -notmatch 'admin|public|\[slug\]|\\api\\|feeds|news-sitemap'
} | Sort-Object FullName | ForEach-Object {
  $rel = $_.FullName.Replace((Resolve-Path $base).Path,'').Replace('\','/').Replace('/page.tsx','')
  if ($rel -eq '') { $rel = '/' }
  try { $c = [System.IO.File]::ReadAllText($_.FullName) } catch { return }
  $title = if ($c -match 'title:\s*"([^"]{5,120})"') { $matches[1] }
           elseif ($c -match "title:\s*'([^']{5,120})'") { $matches[1] }
           else { '' }
  $desc  = if ($c -match 'description:\s*"([^"]{10,200})"') { $matches[1] }
           elseif ($c -match "description:\s*'([^']{10,200})'") { $matches[1] }
           else { '' }
  $auth  = if ($c -match 'author:\s*"([^"]{3,60})"') { $matches[1] }
           elseif ($c -match "author:\s*'([^']{3,60})'") { $matches[1] }
           else { 'ObjectWire Editorial' }
  $out += [pscustomobject]@{ slug=$rel; title=$title; desc=$desc; author=$auth }
}
$out | ConvertTo-Json | Set-Content "$PSScriptRoot\meta.json" -Encoding UTF8
Write-Host "Extracted $($out.Count) pages -> scripts\meta.json"
