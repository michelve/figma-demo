# 🚀 Code Connect Setup - Ready to Go!

Your Figma token is configured! Now let's connect your components.

## ✅ Token Set Successfully

```
Token: Set via environment variable (FIGMA_ACCESS_TOKEN)
Status: ✅ Load from .env file or environment
```

## 📋 Next Steps: Connect Your First Component

### Step 1: Get Component URL from Figma

1. **Open your Figma file** with the components you want to connect
2. **Select a component** (e.g., Button component)
3. **Copy the link:**
   - Right-click on the component
   - Click "Copy/Paste as" → "Copy link"
   - You'll get a URL like: `https://www.figma.com/design/ABC123?node-id=1-234`

### Step 2: Create Connection File

Run this command with your component's Figma URL:

```bash
npx figma connect create --token $env:FIGMA_ACCESS_TOKEN "YOUR_FIGMA_COMPONENT_URL" src/components/ui/button.jsx
```

**Example:**
```bash
npx figma connect create --token $env:FIGMA_ACCESS_TOKEN "https://www.figma.com/design/ABC123?node-id=1-234" src/components/ui/button.jsx
```

This will:
- ✅ Create `button.figma.tsx` file
- ✅ Auto-detect component props
- ✅ Generate example code

### Step 3: Review the Generated File

Open `src/components/ui/button.figma.tsx` and verify:
- Component import is correct
- Props are mapped properly
- Example code looks good

### Step 4: Publish to Figma

```bash
npx figma connect publish --token $env:FIGMA_ACCESS_TOKEN
```

Or use the npm script:
```bash
npm run figma:connect:publish
```

### Step 5: Verify in Figma

1. Go back to Figma Dev Mode
2. Select your Button component
3. Check the "Code" section - you should see real code snippets!

## 🎯 Quick Commands

```bash
# Set token (run this first in new terminal sessions)
$env:FIGMA_ACCESS_TOKEN="your_token_here"

# Create connection (replace URL with your component's URL)
npx figma connect create --token $env:FIGMA_ACCESS_TOKEN "FIGMA_URL_HERE" src/components/ui/button.jsx

# Publish all connections
npx figma connect publish --token $env:FIGMA_ACCESS_TOKEN

# List published connections
npx figma connect list --token $env:FIGMA_ACCESS_TOKEN
```

## 📝 Components to Connect (Priority Order)

### High Priority (Start Here):
1. **Button** - `src/components/ui/button.jsx`
2. **Card** - `src/components/ui/card.jsx`
3. **Input** - `src/components/ui/input.jsx`
4. **Label** - `src/components/ui/label.jsx`
5. **Badge** - `src/components/ui/badge.jsx`

### Medium Priority:
6. Dialog - `src/components/ui/dialog.jsx`
7. Form - `src/components/ui/form.jsx`
8. Select - `src/components/ui/select.jsx`
9. Tabs - `src/components/ui/tabs.jsx`
10. Table - `src/components/ui/table.jsx`

### As Needed:
- All other 40+ components in `src/components/ui/`

## 🔄 Workflow

For each component you want to connect:

1. **Get Figma URL** (copy link from Figma)
2. **Create connection:**
   ```bash
   npx figma connect create --token $env:FIGMA_ACCESS_TOKEN "FIGMA_URL" src/components/ui/COMPONENT.jsx
   ```
3. **Review** the generated `.figma.tsx` file
4. **Publish** when ready:
   ```bash
   npx figma connect publish --token $env:FIGMA_ACCESS_TOKEN
   ```

## ⚡ Alternative: Batch Setup

If you have many components, you can:

1. Create connection files for multiple components
2. Publish all at once:
   ```bash
   npx figma connect publish --token $env:FIGMA_ACCESS_TOKEN
   ```

## 🔒 Security Note

**Important:** Your token is currently in this terminal session only.

To make it permanent:
1. Create `.env.local` file in project root
2. Add: `FIGMA_ACCESS_TOKEN=your_token_here`
3. Token will be automatically loaded (already in `.gitignore`)

## 🎉 Ready!

You're all set! Just need to:
1. Get a component URL from Figma
2. Run the create command
3. Publish to Figma

---

**Need the component URL?** Go to Figma, select a component, right-click → Copy link!
