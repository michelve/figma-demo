# Figma Code Connect Setup Guide

This guide will help you set up Figma Code Connect to bridge your codebase with Figma's Dev Mode.

## 📋 Prerequisites

According to the [Figma Code Connect documentation](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect):

- ✅ **Organization or Enterprise plan** (Code Connect is not available on free/starter plans)
- ✅ **Full or Dev seat** in Figma
- ✅ **GitHub repository** (for Code Connect UI)
- ✅ **React/React Native codebase** (we have React)

## 🎯 What Code Connect Does

Code Connect enhances Figma's MCP server by:
1. **Linking design components** to actual code components
2. **Displaying real code snippets** in Dev Mode (instead of auto-generated ones)
3. **Guiding AI agents** with precise implementation details
4. **Mapping properties** from Figma to code for dynamic snippets

## 🚀 Setup Options

### Option 1: Code Connect UI (Recommended - Beta)

The easiest way to get started. Runs entirely in Figma with GitHub integration.

#### Steps:

1. **Open Figma Dev Mode**
   - Open your design file
   - Switch to Dev Mode (top right)

2. **Access Code Connect UI**
   - Look for Code Connect in the Dev Mode panel
   - Click "Connect to GitHub"

3. **Authorize GitHub**
   - Grant Figma access to your repository
   - Select this repository: `YOUR-USERNAME/YOUR-REPO`

4. **Map Components**
   - Browse your `src/components/ui` folder
   - Link each shadcn component to its Figma counterpart
   - Example mappings:
     - Button component → `src/components/ui/button.jsx`
     - Card component → `src/components/ui/card.jsx`

5. **Verify Connection**
   - Select a component in Figma
   - Check Dev Mode for your real code snippets

### Option 2: Code Connect CLI (Advanced)

For more control and automated mappings.

#### Installation:

```bash
npm install --save-dev @figma/code-connect
```

#### Configuration:

We've created `figma.config.json` for you with these settings:
- Includes: `src/components/ui/**/*.jsx`
- Parser: React
- Label: "shadcn/ui Components"

#### Creating Mappings:

1. **Get Component Node IDs from Figma:**
   - Select component in Figma
   - Right-click → Copy/Paste as → Copy link
   - Extract node-id: `?node-id=123:456`

2. **Create .figma.jsx files:**
   
   Example: `src/components/ui/button.figma.jsx` (already created as template)

   ```jsx
   import figma from '@figma/code-connect'
   import { Button } from './button'

   figma.connect(
     Button,
     'YOUR_FIGMA_NODE_ID',
     {
       props: {
         variant: figma.enum('variant', {
           default: 'default',
           destructive: 'destructive',
           outline: 'outline',
         }),
         children: figma.children('*'),
       },
       example: ({ variant, children }) => (
         <Button variant={variant}>{children}</Button>
       ),
     }
   )
   ```

3. **Publish Connections:**
   ```bash
   npx figma connect publish
   ```

4. **Verify in Dev Mode:**
   - Open Figma Dev Mode
   - Select a connected component
   - See your actual code snippets!

## 📁 Files We've Created

### `figma.config.json`
Configuration file for Code Connect CLI:
- Specifies which files to include
- Sets up React parser
- Configures component paths

### `src/components/ui/button.figma.jsx` (Template)
Example Code Connect mapping for the Button component:
- Shows how to map Figma properties to React props
- Includes usage examples
- Ready to customize with your Figma node ID

## 🔗 Connecting Your Components

### Manual Mapping Steps:

For each of your 50+ shadcn components:

1. **In Figma:**
   - Open your design library
   - Find the component (e.g., Button)
   - Copy the node ID from the URL

2. **In Code:**
   - Create/update `.figma.jsx` file
   - Replace `YOUR_FIGMA_NODE_ID` with actual ID
   - Map Figma properties to component props

3. **Publish:**
   ```bash
   npx figma connect publish
   ```

### Example Mappings:

```jsx
// Button
figma.connect(Button, 'BUTTON_NODE_ID', {...})

// Card
figma.connect(Card, 'CARD_NODE_ID', {...})

// Input
figma.connect(Input, 'INPUT_NODE_ID', {...})
```

## 🎨 Component Priority

Start with these commonly used components:

1. **High Priority:**
   - Button
   - Card
   - Input
   - Label
   - Badge

2. **Medium Priority:**
   - Dialog
   - Form
   - Select
   - Tabs
   - Table

3. **As Needed:**
   - All other shadcn components

## 🔄 Workflow Integration

### With Figma MCP Server:

Your existing `.cursor/mcp.json` configuration already includes Figma MCP. Code Connect enhances this by:

1. **Better Context:** AI agents get actual code references
2. **Accurate Snippets:** Real component usage instead of guesses
3. **Property Mapping:** Figma variants map to actual props

### Example AI Prompts (After Setup):

- "Generate a login form using our Button and Input components"
- "Show me how to use the Card component with the header variant"
- "Create a data table using our Table component"

## 📊 What Gets Shared

According to Figma's privacy policy, Code Connect only collects:
- ✅ Component file paths
- ✅ Repository URL
- ✅ Properties and code in .figma files
- ✅ Basic usage events (publish/unpublish)

**NOT shared:**
- ❌ Your full codebase
- ❌ Sensitive data
- ❌ API keys or secrets

## 🛠️ Commands Reference

```bash
# Install Code Connect CLI
npm install --save-dev @figma/code-connect

# Initialize configuration
npx figma connect init

# Create connection for a component
npx figma connect create src/components/ui/button.jsx

# Publish connections to Figma
npx figma connect publish

# Unpublish connections
npx figma connect unpublish

# List published connections
npx figma connect list
```

## 📚 Additional Resources

- [Code Connect Documentation](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect)
- [Code Connect GitHub](https://github.com/figma/code-connect)
- [Dev Mode Guide](https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode)
- [Figma API Docs](https://www.figma.com/developers/api)

## 🚨 Troubleshooting

### "Code Connect UI not showing"
- ✅ Check you're on Organization/Enterprise plan
- ✅ Ensure you have Full or Dev seat
- ✅ Update Figma to latest version

### "Components not linking"
- ✅ Verify node IDs are correct
- ✅ Check file paths in figma.config.json
- ✅ Ensure components are published in Figma

### "GitHub authorization failed"
- ✅ Check GitHub permissions
- ✅ Verify repository access
- ✅ Try reconnecting in Figma settings

## ✅ Next Steps

1. **Choose your approach:**
   - 🟢 Start with Code Connect UI (if available)
   - 🟡 Use Code Connect CLI for automation

2. **Map high-priority components first**
   - Begin with Button, Card, Input

3. **Test with AI agents**
   - Try prompts with your MCP server
   - Verify code snippets are accurate

4. **Expand coverage**
   - Gradually add more components
   - Document component usage

5. **Train your team**
   - Share this guide
   - Create internal examples

---

**Your repository is now Code Connect-ready!** 

Start mapping components when you have access to Figma Code Connect (Organization/Enterprise plan required).
