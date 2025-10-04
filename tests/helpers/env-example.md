# Environment Variables for Visual Testing

## Required Variables

### `figma_token` or `FIGMA_ACCESS_TOKEN`
Your Figma personal access token.

**How to get it:**
1. Go to https://www.figma.com/settings
2. Scroll to "Personal Access Tokens"
3. Click "Generate new token"
4. Copy the token (starts with `figd_`)

**Example:**
```env
figma_token=your_token_here
```

## Optional Variables

### `FIGMA_FILE_KEY`
The Figma file identifier.

**How to get it:**
From your Figma URL: `https://www.figma.com/design/FILE_KEY/...`

**Example:**
```env
FIGMA_FILE_KEY=qh39N0zcMJfRKKkjPnBXKJ
```

**Default:** `qh39N0zcMJfRKKkjPnBXKJ` (current project)

### `FIGMA_NODE_ID`
The specific node/frame to compare.

**How to get it:**
From your Figma URL: `https://www.figma.com/design/...?node-id=109-1005`
The node ID is `109:1005` (replace `-` with `:`)

**Example:**
```env
FIGMA_NODE_ID=109:1005
```

**Default:** `109:1005` (contact form)

## Complete .env Example

```env
# Required
figma_token=your_token_here

# Optional (with defaults)
FIGMA_FILE_KEY=qh39N0zcMJfRKKkjPnBXKJ
FIGMA_NODE_ID=109:1005
```

## Testing Different Designs

To test different Figma designs, simply update the environment variables:

```env
# Test a different component
FIGMA_NODE_ID=123:456

# Test from a different file
FIGMA_FILE_KEY=abc123xyz
```

No code changes needed! 🎉

