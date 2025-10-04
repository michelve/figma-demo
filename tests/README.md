# Visual Comparison Tests - Figma Design vs Code

This directory contains Playwright tests that compare your Figma designs with the actual implemented code.

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Get Your Figma Access Token

1. Go to https://www.figma.com/developers/api#access-tokens
2. Click on your profile → Settings → Account Settings
3. Scroll to "Personal Access Tokens"
4. Click "Generate new token"
5. Copy the token

### 3. Set Environment Variables

Create a `.env` file in the project root:

```env
# Required: Figma Access Token
figma_token=figd_your_token_here

# Optional: Figma File Key (defaults to current project)
FIGMA_FILE_KEY=qh39N0zcMJfRKKkjPnBXKJ

# Optional: Figma Node ID (defaults to contact form: 109:1005)
FIGMA_NODE_ID=109:1005
```

**Note**: Both `figma_token` and `FIGMA_ACCESS_TOKEN` are supported for the token.

Or set it temporarily in your terminal:

**Windows (PowerShell):**
```powershell
$env:FIGMA_ACCESS_TOKEN="your_figma_token_here"
```

**Mac/Linux:**
```bash
export FIGMA_ACCESS_TOKEN="your_figma_token_here"
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Update snapshots (when design changes)
```bash
npm run test:update
```

### Run specific test file
```bash
npx playwright test tests/figma-visual-comparison.spec.js
```

## How It Works

### 1. Figma Screenshot Download
The test suite downloads a screenshot from your Figma design using the Figma API. This happens automatically before tests run.

### 2. Code Screenshot
Playwright renders your React component in a real browser and takes a screenshot.

### 3. Comparison
The screenshots are compared pixel-by-pixel with configurable thresholds for differences.

### 4. Results
- ✅ **Pass**: Implementation matches the design (within threshold)
- ❌ **Fail**: Differences detected, diff images generated in `test-results/`

## Test Files

- `figma-visual-comparison.spec.js` - Main comparison tests
- `helpers/figma-helper.js` - Figma API integration
- `figma-screenshots/` - Downloaded Figma designs (gitignored)
- `*-snapshots/` - Baseline screenshots for comparison

## Configuring Thresholds

In `figma-visual-comparison.spec.js`, you can adjust:

```js
await expect(screenshot).toMatchSnapshot('contact-form.png', {
  maxDiffPixels: 100,  // Maximum number of different pixels
  threshold: 0.2,      // 0.2 = 20% threshold
});
```

## CI/CD Integration

The tests can run in GitHub Actions, GitLab CI, or any CI/CD platform. Make sure to:

1. Set `FIGMA_ACCESS_TOKEN` as a secret in your CI
2. The tests will automatically start the dev server
3. Screenshots and reports are saved as artifacts

## Troubleshooting

### "FIGMA_ACCESS_TOKEN not set"
Make sure you've created a `.env` file or set the environment variable.

### "Could not get Figma image URL"
Check that:
- Your Figma token is valid
- You have access to the Figma file
- The node ID exists in the file

### Tests are failing with small differences
This is normal! Designs and code may have minor pixel differences due to:
- Font rendering
- Browser rendering engine
- Antialiasing

Adjust the `threshold` and `maxDiffPixels` values to account for acceptable differences.

## Best Practices

1. **Run tests before commits** - Catch design drift early
2. **Update baselines when designs change** - Use `npm run test:update`
3. **Review diff images** - Check `test-results/` folder for visual diffs
4. **Keep designs in sync** - Update Figma when code changes or vice versa

