# Styles Directory Organization

This directory contains all CSS styles organized by category:

## Structure

```
src/styles/
├── tokens/              # Design tokens (colors, typography, spacing, components)
│   ├── colors.css       # Color palette and semantic color mappings
│   ├── typography.css   # Font families, sizes, weights, line heights
│   ├── spacing.css      # Spacing scale, border radius, z-index
│   ├── components.css   # Shadows, transitions, layout utilities
│   └── index.css        # Main tokens entry point
├── pages/               # Page-specific styles
│   └── ComponentsDemo.css  # Components demo page styles
├── custom.css           # Custom utility classes and components
└── shadcn.css          # shadcn/ui compatibility styles
```

## Usage

### Design Tokens
All design tokens are imported through the main index.css:
```css
@import './styles/tokens/index.css';
```

### Page Styles
Import page-specific styles in your components:
```jsx
import '../styles/pages/ComponentsDemo.css'
```

## Design Token Categories

### Colors
- Primary, secondary, accent color scales
- Semantic colors (success, warning, error, neutral)
- Component-specific color mappings
- Dark theme support

### Typography
- Font families (primary, secondary, mono, heading)
- Font sizes (xs to 9xl)
- Font weights and line heights
- Component-specific typography scales

### Spacing
- Consistent spacing scale (0 to 96)
- Component-specific padding/margin
- Layout max-widths and breakpoints
- Border radius values

### Components
- Box shadows and transitions
- Focus styles and interactive states
- Layout utilities (flex, grid)
- Component-specific design tokens

## Best Practices

1. **Use design tokens** instead of hardcoded values
2. **Organize styles by page** in the pages/ directory
3. **Create component-specific tokens** for reusable patterns
4. **Maintain semantic naming** for color and spacing tokens
5. **Test dark theme compatibility** when adding new colors