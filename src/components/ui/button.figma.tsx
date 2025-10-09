import React from "react"
import { Button } from "./button"
import figma from "@figma/code-connect"

/**
 * Button Component - Design System Implementation
 * 
 * DESIGN SYSTEM GUIDELINES:
 * 
 * Usage Guidelines:
 * ✅ Default (Primary): Main call-to-action, submit forms, primary navigation
 * ✅ Secondary: Supporting actions, secondary navigation, non-primary CTAs  
 * ✅ Destructive: Delete, remove, cancel subscriptions, irreversible actions
 * ✅ Outline: Alternative secondary action, filter buttons, toggles
 * ✅ Ghost: Subtle actions, icon buttons, tertiary actions
 * ✅ Link: Text-based actions, inline navigation, breadcrumbs
 * 
 * Accessibility Requirements (WCAG 2.1 AA):
 * - Color Contrast: Minimum 4.5:1 ratio for normal text
 * - Touch Target: Minimum 44x44px for interactive elements
 * - Keyboard Navigation: Tab, Enter, Space key support
 * - Screen Reader: Proper ARIA attributes and labels
 * - Focus Management: Visible focus indicators
 * 
 * Component Hierarchy (Per Screen):
 * - Maximum 1 Primary (default variant) per view
 * - 2-3 Secondary actions maximum
 * - Unlimited Ghost/Link for tertiary actions
 */

figma.connect(
  Button,
  "https://www.figma.com/design/qh39N0zcMJfRKKkjPnBXKJ/shadcn-ds?node-id=1-85",
  {
    props: {
      variant: figma.enum("Variant", {
        Default: "default",
        Destructive: "destructive", 
        Outline: "outline",
        Secondary: "secondary",
        Ghost: "ghost",
        Link: "link",
      }),
      size: figma.enum("Size", {
        Default: "default",
        Small: "sm",
        Large: "lg",
        Icon: "icon",
      }),
      asChild: figma.boolean("As Child", {
        true: true,
        false: false,
      }),
      children: figma.textContent("Button Text"),
      disabled: figma.boolean("Disabled"),
    },

    // Main example for Figma Dev Mode
    example: ({ variant, size, asChild, children, disabled }) => (
      <Button 
        variant={variant} 
        size={size} 
        asChild={asChild}
        disabled={disabled}
      >
        {children || "Button"}
      </Button>
    ),
  }
)

// DESIGN SYSTEM USAGE EXAMPLES

/**
 * Primary Action Example
 * Use for main call-to-action buttons
 */
figma.connect(
  Button,
  "https://www.figma.com/design/qh39N0zcMJfRKKkjPnBXKJ/shadcn-ds?node-id=1-85&variant=primary",
  {
    example: () => (
      <Button variant="default" size="default">
        Save Changes
      </Button>
    ),
  }
)

/**
 * Form Button Group Pattern
 * Standard form submission with primary and secondary actions
 */
figma.connect(
  Button,
  "https://www.figma.com/design/qh39N0zcMJfRKKkjPnBXKJ/shadcn-ds?node-id=1-85&variant=form-group",
  {
    example: () => (
      <div className="flex gap-3 justify-end">
        <Button variant="outline" size="default">Cancel</Button>
        <Button variant="default" size="default">Submit</Button>
      </div>
    ),
  }
)

/**
 * Destructive Action Pattern
 * For delete, remove, or other irreversible actions
 * ALWAYS implement confirmation dialog for destructive actions
 */
figma.connect(
  Button,
  "https://www.figma.com/design/qh39N0zcMJfRKKkjPnBXKJ/shadcn-ds?node-id=1-85&variant=destructive",
  {
    example: () => (
      <Button variant="destructive" size="default">
        Delete Account
      </Button>
    ),
  }
)

/**
 * Icon Button Pattern  
 * Icon-only button for compact interfaces
 * MUST include aria-label for accessibility
 */
figma.connect(
  Button,
  "https://www.figma.com/design/qh39N0zcMJfRKKkjPnBXKJ/shadcn-ds?node-id=1-85&variant=icon",
  {
    example: () => (
      <Button variant="ghost" size="icon" aria-label="Close dialog">
        {/* <X className="h-4 w-4" /> */}
        ×
      </Button>
    ),
  }
)

/**
 * Loading State Pattern
 * Button with loading indicator and disabled state
 */
figma.connect(
  Button,
  "https://www.figma.com/design/qh39N0zcMJfRKKkjPnBXKJ/shadcn-ds?node-id=1-85&variant=loading",
  {
    example: () => (
      <Button variant="default" disabled>
        {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
        ⟳ Processing...
      </Button>
    ),
  }
)

/**
 * Link Button Pattern
 * Text-based button for navigation or subtle actions
 */
figma.connect(
  Button,
  "https://www.figma.com/design/qh39N0zcMJfRKKkjPnBXKJ/shadcn-ds?node-id=1-85&variant=link",
  {
    example: () => (
      <Button variant="link" size="sm">
        Learn more
      </Button>
    ),
  }
)

