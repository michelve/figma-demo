# Code Connect Quick Start - "No Results Found" Fix

## 🚨 Problem: "No results found" in Figma Code Connect

When you see "No results found", it means Figma hasn't found any published Code Connect mappings yet.

## ✅ Solution: Two Options

### Option A: Use Code Connect UI (Easiest - Recommended)

Since you're already in the Code Connect UI, let's use the **Manual Mapping** approach:

#### Steps:

1. **In Figma Code Connect panel:**
   - You should see "Connect component" button
   - Click it for the component you want to map

2. **Choose Manual Mapping:**
   - Instead of searching, use manual mapping
   - Enter the file path: `src/components/ui/button.jsx`
   - Enter component name: `Button`

3. **Set Properties (if needed):**
   - Map Figma variants to code props
   - Example: Figma "Variant" property → Code `variant` prop

4. **Save the mapping**

5. **Repeat for other components**

### Option B: Use Code Connect CLI (More Control)

#### Step 1: Get Figma Access Token

1. **Go to Figma Settings:**
   - Open Figma → Click your profile
   - Go to Settings → Account
   - Scroll to "Personal access tokens"
   - Click "Create new token"
   - Give it a name: "Code Connect"
   - Copy the token

2. **Set the token as environment variable:**

   **Windows (PowerShell):**
   ```powershell
   $env:FIGMA_ACCESS_TOKEN="your_token_here"
   ```

   **Windows (CMD):**
   ```cmd
   set FIGMA_ACCESS_TOKEN=your_token_here
   ```

   **Or create `.env` file:**
   ```bash
   FIGMA_ACCESS_TOKEN=your_token_here
   ```

#### Step 2: Get Component URLs from Figma

1. **Open your Figma design file**
2. **Select a component** (e.g., Button)
3. **Copy the link:**
   - Right-click → Copy/Paste as → Copy link
   - URL looks like: `https://www.figma.com/design/ABC123?node-id=1-234`

#### Step 3: Update the Connection File

Edit `src/components/ui/button.figma.tsx`:

```tsx
figma.connect(
  Button,
  "https://www.figma.com/design/YOUR_FILE_KEY?node-id=YOUR_NODE_ID", // ← Replace this
  {
    // ... rest of config
  }
)
```

Replace with your actual Figma URL.

#### Step 4: Publish to Figma

```bash
npx figma connect publish --token YOUR_TOKEN
```

Or if you set the environment variable:
```bash
npm run figma:connect:publish
```

## 🎯 Quick Manual Mapping Guide

Since the CLI requires tokens, here's the **fastest manual approach**:

### For Each Component in Figma:

1. **Select component in Figma**
2. **Click "Connect component"** (right panel)
3. **Choose "Manual mapping"**
4. **Fill in:**
   - **File path:** `src/components/ui/button.jsx`
   - **Component name:** `Button`
   - **Export type:** `named` (or `default` if it's default export)

5. **Map properties:**
   - Figma property name → Code prop name
   - Example mappings:

   | Figma Property | Code Prop | Values |
   |----------------|-----------|--------|
   | Variant | variant | default, destructive, outline, etc. |
   | Size | size | default, sm, lg, icon |
   | State | disabled | true, false |

6. **Save**

7. **Repeat for next component**

## 📋 Common Components to Map

Start with these high-priority components:

### 1. Button
```
Path: src/components/ui/button.jsx
Name: Button
Props: variant, size, asChild, disabled
```

### 2. Card
```
Path: src/components/ui/card.jsx
Name: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
```

### 3. Input
```
Path: src/components/ui/input.jsx
Name: Input
Props: type, disabled, placeholder
```

### 4. Label
```
Path: src/components/ui/label.jsx
Name: Label
```

### 5. Badge
```
Path: src/components/ui/badge.jsx
Name: Badge
Props: variant (default, secondary, destructive, outline)
```

## 🔧 Component Export Check

Make sure your components are exported correctly. Check `src/components/ui/button.jsx`:

```jsx
// ✅ Named export (most common for shadcn)
export { Button, buttonVariants }

// Or if using default:
// export default Button
```

For Code Connect, specify:
- **Named export:** Use component name exactly: `Button`
- **Default export:** Use `default` or the variable name

## ⚡ Pro Tips

1. **Start small:** Map 3-5 most-used components first
2. **Test as you go:** Check Dev Mode after each mapping
3. **Document props:** Note which Figma properties map to which code props
4. **Use variants:** Map Figma variants to component variant props

## 🐛 Troubleshooting

### "Component not found in repository"
- ✅ Check file path is exact: `src/components/ui/button.jsx`
- ✅ Check component name matches export
- ✅ Verify GitHub connection is active

### "Properties not mapping"
- ✅ Use exact prop names from your code
- ✅ Check variant values match (case-sensitive)
- ✅ Verify prop types (string, boolean, enum)

### "Changes not showing"
- ✅ Refresh Figma
- ✅ Re-select the component
- ✅ Clear cache: Figma → Help → Clear cache

## 📚 Next Steps

1. **Map your first component** (Button recommended)
2. **Test in Dev Mode:** Select Button in design → Check code snippet
3. **Add more components** gradually
4. **Share with team** once mappings work

## 🆘 Still Stuck?

The Manual Mapping approach should work immediately without CLI or tokens. Just:
1. Click "Connect component"
2. Choose "Manual mapping"
3. Enter file path and component name
4. Done!

---

**The key insight:** You don't need to declare components in code first. You can map them directly in Figma UI!
