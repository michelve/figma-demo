# CSS Structure

This directory contains reference CSS files for organizing your styles.

## File Structure

```
src/
├── index.css          # Main CSS file (actively used)
└── styles/
    ├── shadcn.css     # shadcn/ui variables reference
    ├── custom.css     # Custom styles reference/examples
    └── README.md      # This file
```

## How It Works

### `src/index.css` (Main File)
This is the **only CSS file that's actually imported** into your app. It contains:
1. Tailwind directives
2. shadcn/ui theme variables (inline)
3. Custom styles section at the bottom

### `src/styles/shadcn.css` (Reference Only)
This file is for **reference and documentation** purposes. It contains:
- All shadcn/ui CSS variables
- Light and dark mode definitions
- Use this as a reference when customizing your theme

**To customize:** Copy the variables you want to change from here and modify them in `src/index.css`.

### `src/styles/custom.css` (Reference/Examples)
This file contains **example custom styles and utilities**. It includes:
- Custom utility classes
- Custom components
- Animations
- Gradient backgrounds
- Glassmorphism effects

**To use:** Copy the styles you want from here and paste them at the bottom of `src/index.css`.

## Why This Structure?

### Problem with CSS @import
CSS `@import` statements must come before all other CSS rules, which conflicts with Tailwind's `@tailwind` directives. Additionally, using multiple imports can impact performance.

### Our Solution
1. **Single Entry Point**: Only `src/index.css` is imported into the app
2. **Reference Files**: `shadcn.css` and `custom.css` serve as organized references
3. **Easy Customization**: Copy what you need into `index.css`

## Usage Examples

### Customizing Theme Colors

1. Open `src/styles/shadcn.css`
2. Find the variable you want to change (e.g., `--primary`)
3. Copy it to `src/index.css` inside the `:root` block
4. Modify the value

```css
/* In src/index.css */
@layer base {
  :root {
    /* ... other variables ... */
    --primary: 262 83% 58%; /* Changed to purple */
  }
}
```

### Adding Custom Styles

1. Choose a style from `src/styles/custom.css`
2. Copy it to the bottom of `src/index.css`

```css
/* At the bottom of src/index.css */

/* Custom Animations */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-in-out;
}
```

## Best Practices

1. **Keep `index.css` organized**: 
   - Tailwind directives at top
   - shadcn variables in `@layer base`
   - Custom styles at bottom

2. **Document your changes**: Add comments when customizing variables

3. **Use Tailwind utilities first**: Only add custom CSS when Tailwind utilities aren't sufficient

4. **Group related styles**: Keep animations, utilities, and components in separate sections

## Need Help?

- shadcn/ui Documentation: https://ui.shadcn.com/docs/theming
- Tailwind CSS Documentation: https://tailwindcss.com/docs
