# 🎨 Visual Testing Setup - Figma Design vs Code

Automated visual regression testing to ensure your implementation matches the Figma design.

## 🚀 Quick Start

### 1. Get Your Figma Access Token

1. Go to https://www.figma.com/settings
2. Scroll to **Personal Access Tokens**
3. Click **Generate new token**
4. Give it a name like "Visual Testing"
5. Copy the token

### 2. Set Up Environment Variables

Create a `.env` file in the project root:

```env
# Figma Access Token (required)
figma_token=figd_your_token_here
# Or use uppercase
FIGMA_ACCESS_TOKEN=figd_your_token_here

# Figma File Key (optional - defaults to current project)
FIGMA_FILE_KEY=qh39N0zcMJfRKKkjPnBXKJ

# Figma Node ID (optional - defaults to contact form)
FIGMA_NODE_ID=109:1005
```

**Or set temporarily in your terminal:**

**Windows (PowerShell):**
```powershell
$env:figma_token="figd_your_token_here"
$env:FIGMA_FILE_KEY="qh39N0zcMJfRKKkjPnBXKJ"
$env:FIGMA_NODE_ID="109:1005"
```

**Mac/Linux:**
```bash
export figma_token="figd_your_token_here"
export FIGMA_FILE_KEY="qh39N0zcMJfRKKkjPnBXKJ"
export FIGMA_NODE_ID="109:1005"
```

### 3. Run Tests

```bash
# Run all visual tests
npm test

# Run in interactive UI mode
npm run test:ui

# Update baseline screenshots
npm run test:update

# View test report
npm run test:report
```

## 📊 What Gets Tested

### 1. **Pixel-Perfect Comparison**
   - Compares Figma design screenshot with rendered component
   - Allows configurable threshold for minor differences

### 2. **Layout Structure**
   - Verifies all form elements are present
   - Checks labels, inputs, placeholders, and helper text

### 3. **Styling Verification**
   - Background colors (slate-200)
   - Form dimensions
   - Spacing and padding

### 4. **Full Page Snapshot**
   - Complete page visual regression

## 🎯 Test Results

### ✅ Tests Pass
Your implementation matches the Figma design (within threshold)!

### ❌ Tests Fail
Visual differences detected. Check the diff images in:
- `test-results/` - Failed test screenshots
- `playwright-report/` - HTML report with visual diffs

## 🔧 Configuration

Edit `tests/figma-visual-comparison.spec.js` to adjust thresholds:

```javascript
await expect(screenshot).toMatchSnapshot('contact-form.png', {
  maxDiffPixels: 100,  // Max number of different pixels
  threshold: 0.2,      // 0.2 = 20% difference tolerance
});
```

## 📁 File Structure

```
figma_demo/
├── tests/
│   ├── figma-visual-comparison.spec.js  # Main test file
│   ├── helpers/
│   │   └── figma-helper.js              # Figma API integration
│   ├── figma-screenshots/               # Downloaded Figma designs
│   └── README.md                        # Detailed docs
├── playwright.config.js                 # Playwright configuration
└── .github/workflows/visual-tests.yml   # CI/CD workflow
```

## 🔄 CI/CD Integration

The project includes a GitHub Actions workflow that:
1. Runs on every push and pull request
2. Downloads Figma screenshots
3. Runs visual comparison tests
4. Uploads test reports as artifacts

### Setup GitHub Actions

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add new repository secret:
   - Name: `FIGMA_ACCESS_TOKEN`
   - Value: Your Figma token

## 💡 Tips

### First Run
The first time you run tests, Playwright will:
1. Create baseline screenshots
2. All tests will pass (no baseline to compare against)

### Updating Baselines
When your design changes in Figma:
```bash
npm run test:update
```

### Debugging
Use UI mode to debug tests interactively:
```bash
npm run test:ui
```

### Acceptable Differences
Minor differences are normal due to:
- Font rendering
- Browser antialiasing
- Image compression

Adjust thresholds to match your tolerance.

## 🐛 Troubleshooting

### "FIGMA_ACCESS_TOKEN not set"
**Solution**: Set the environment variable or create `.env` file

### "Could not get Figma image URL"
**Solution**: 
- Check token is valid
- Verify you have access to the Figma file
- Ensure node ID `109:1005` exists

### Tests timing out
**Solution**: Increase timeout in `playwright.config.js`:
```javascript
use: {
  timeout: 30000, // 30 seconds
}
```

### Dev server not starting
**Solution**: Make sure port 5178 is available or change in config

## 📚 Learn More

- [Playwright Documentation](https://playwright.dev)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [Visual Testing Best Practices](https://playwright.dev/docs/test-snapshots)

## 🎉 Benefits

- ✅ Catch design drift early
- ✅ Automated QA process
- ✅ Consistent implementation
- ✅ Confidence in deployments
- ✅ Historical comparison
- ✅ CI/CD integration

