# GitHub Copilot Instructions for Figma Demo

## Project Architecture Overview

This is a **React + Vite + Tailwind CSS project** with **dual Figma integration strategies**: Official Figma MCP and TalkToFigma MCP for design-to-code workflows. The project implements a **design token system** with CSS custom properties bridging Figma variables to React components.

### Key Architecture Concepts

- **Component-per-folder**: Each UI component has its own directory with `.jsx`, `.css`, `.figma.tsx`, and `index.js`
- **Design Token Pipeline**: `figma-tokens.json` → CSS custom properties → React components
- **CVA Pattern**: All components use `class-variance-authority` for variant management
- **Code Connect Ready**: Components include `.figma.tsx` files for Figma-to-code mapping

## Essential Development Workflows

### Starting Development

```bash
npm run dev                    # Vite dev server (auto-starts)
npm run figma-socket           # TalkToFigma WebSocket (auto-starts)
```

### Working with Figma Integration

```bash
# TalkToFigma MCP workflow
1. Ensure WebSocket server running (should auto-start)
2. Join channel in Cursor: use `join_channel` tool FIRST
3. Use natural language: "Generate code for my Figma selection"

# Official Figma MCP workflow
1. Select elements in Figma
2. Use prompts: "Generate React code using design tokens"
3. Extract variables: "Get the variable names and values"
```

### Adding New Components

```bash
# 1. Create component structure
src/components/ui/ComponentName/
├── ComponentName.jsx          # Main component with CVA
├── ComponentName.css          # CSS with design tokens
├── ComponentName.figma.tsx    # Code Connect definition
└── index.js                   # Export

# 2. Add to barrel export
# Update src/components/index.js

# 3. Use design tokens, never hardcoded values
```

## Design Token System Rules

### CRITICAL: Always Use Design Tokens

```css
/* ✅ CORRECT */
.btn {
  background: var(--action-primary);
  color: var(--button-primary-text);
  padding: var(--spacing-component);
  border-radius: var(--radius-md);
}

/* ❌ NEVER DO THIS */
.btn {
  background: #2563eb;
  color: white;
  padding: 16px;
  border-radius: 6px;
}
```

### Token Hierarchy (3-tier system)

1. **Primitive**: `--color-primary-600` (in `figma-tokens.json`)
2. **Semantic**: `--action-primary` (aliases primitives)
3. **Component**: `--button-primary-text` (aliases semantic)

### Component CSS Pattern

```css
/* Base component class */
.component-name {
  /* Base styles using tokens */
}

/* Variants (use BEM-like) */
.component-name--primary {
}
.component-name--sm {
}

/* Combined classes work together */
.component-name--primary.component-name--sm {
}
```

## Component Architecture Patterns

### CVA Component Template

```jsx
import React from "react";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import "./ComponentName.css";

const componentVariants = cva("component-base", {
  variants: {
    variant: {
      primary: "component--primary",
      secondary: "component--secondary",
    },
    size: {
      sm: "component--sm",
      md: "component--md",
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

const ComponentName = React.forwardRef(
  (
    { variant = "primary", size = "md", className, children, ...props },
    ref
  ) => (
    <element
      ref={ref}
      className={clsx(componentVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </element>
  )
);

export default ComponentName;
```

### Code Connect Integration

Each component includes a `.figma.tsx` file:

```tsx
import figma from "@figma/code-connect";
import ComponentName from "./ComponentName";

figma.connect(ComponentName, "FIGMA_COMPONENT_URL", {
  props: {
    variant: figma.enum("Variant", {
      Primary: "primary",
      Secondary: "secondary",
    }),
    // Map Figma properties to React props
  },
});
```

## Critical File Locations

- **Design Tokens**: `src/styles/tokens/` (colors, typography, spacing, components)
- **UI Components**: `src/components/ui/ComponentName/`
- **Figma Config**: `figma.config.json` (Code Connect settings)
- **MCP Config**: `.cursor/mcp.json` (AI integrations)
- **Instructions**: `.github/instructions/` (AI behavior rules)

## Testing & Validation

### Visual Comparison Tests

```bash
npm run test              # Playwright visual tests
npm run test:update       # Update snapshots
```

Tests compare Figma designs with implemented components using screenshots.

### Code Quality Rules

- **Post-edit analysis**: Codacy automatically runs after file edits (configured in instructions)
- **Security scanning**: Trivy runs after dependency changes
- **Token validation**: Check `src/styles/tokens/TOKEN_ANALYSIS.md` for token system updates

## Common Pitfalls to Avoid

1. **Missing channel join**: TalkToFigma requires `join_channel` tool FIRST before any commands
2. **Hardcoded values**: Always use design tokens instead of magic numbers/colors
3. **Wrong MCP server**: Use TalkToFigma for design modification, Official Figma MCP for code generation
4. **Component structure**: Follow the component-per-folder pattern with all 4 files
5. **CVA imports**: Always import and use `class-variance-authority` for variants

## Integration Points

- **Figma Variables** → `figma-tokens.json` → CSS custom properties → React components
- **MCP Servers**: 3 configured (shadcn, TalkToFigma, Official Figma)
- **Build Pipeline**: Vite handles asset optimization and CSS processing
- **Responsive**: Mobile-first with CSS custom properties for breakpoints

This project excels at **design-to-code automation** - always leverage the MCP integrations and design token system rather than manually coding components from scratch.
