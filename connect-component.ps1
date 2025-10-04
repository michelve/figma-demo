# Code Connect Helper Script
# Usage: .\connect-component.ps1 "FIGMA_URL" button

param(
    [Parameter(Mandatory=$true)]
    [string]$FigmaUrl,
    
    [Parameter(Mandatory=$true)]
    [string]$ComponentName
)

# Read token from environment variable
$Token = $env:FIGMA_ACCESS_TOKEN
if (-not $Token) {
    $Token = $env:figma_token
}
if (-not $Token) {
    Write-Error "❌ FIGMA_ACCESS_TOKEN or figma_token not set!"
    Write-Host "Set it with: `$env:FIGMA_ACCESS_TOKEN='your_token_here'"
    exit 1
}
$ComponentPath = "src/components/ui/$ComponentName.jsx"
$OutputFile = "$ComponentName.figma.tsx"
$TargetPath = "src/components/ui/$ComponentName.figma.tsx"

Write-Host "🔗 Connecting $ComponentName to Figma..." -ForegroundColor Cyan
Write-Host "   URL: $FigmaUrl" -ForegroundColor Gray
Write-Host "   Path: $ComponentPath" -ForegroundColor Gray
Write-Host ""

npx figma connect create --token $Token "$FigmaUrl" $ComponentPath

# Move file to correct location if it was created in root
if (Test-Path $OutputFile) {
    Write-Host "📁 Moving file to correct location..." -ForegroundColor Yellow
    Move-Item -Path $OutputFile -Destination $TargetPath -Force
    
    # Fix import path (lowercase)
    $content = Get-Content $TargetPath -Raw
    $ComponentNameCapitalized = $ComponentName.Substring(0,1).ToUpper() + $ComponentName.Substring(1)
    $content = $content -replace "from `"\./$ComponentNameCapitalized`"", "from `"./$ComponentName`""
    Set-Content -Path $TargetPath -Value $content -NoNewline
    Write-Host "✅ Fixed import path to use lowercase" -ForegroundColor Green
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Connection file created successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Next steps:" -ForegroundColor Yellow
    Write-Host "   1. Review the generated file: $ComponentPath.figma.tsx"
    Write-Host "   2. Publish to Figma: npm run figma:connect:publish"
} else {
    Write-Host "❌ Failed to create connection" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 Tips:" -ForegroundColor Yellow
    Write-Host "   - Make sure the Figma URL contains 'node-id'"
    Write-Host "   - Verify the component file exists at $ComponentPath"
}
