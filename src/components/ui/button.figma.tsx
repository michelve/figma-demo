import React from "react"
import { Button } from "./button"
import figma from "@figma/code-connect"

/**
 * Button Component - Design System Implementation
 * 
 * This file connects the shadcn/ui Button component to Figma components,
 * mapping Figma properties to React props for accurate code snippets in Dev Mode.
 */

figma.connect(
  Button,
  "https://www.figma.com/design/qh39N0zcMJfRKKkjPnBXKJ/shadcn-ds?node-id=1-85",
  {
    props: {
      // Map Figma variants to React props (matching actual Button component)
      variant: figma.enum("Variant", {
        Primary: "default",      // Figma "Primary" maps to shadcn "default"
        Secondary: "secondary", 
        Destructive: "destructive",
        Outline: "outline",
        Ghost: "ghost",
        Link: "link",
      }),
      
      // Map Figma size variants to React size props
      size: figma.enum("Size", {
        Large: "lg",
        Medium: "default", 
        Small: "sm",
        Icon: "icon",
      }),
      
      // Map text content from Figma text layer to children
      children: figma.textContent("Label"),
      
      // Map disabled state
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      
      // Support for asChild prop (shadcn/ui feature)
      asChild: figma.boolean("As Child"),
    },

    // Example showing how the component renders in code
    example: ({ variant, size, disabled, children, asChild }) => {
      return (
        <Button 
          variant={variant} 
          size={size} 
          disabled={disabled}
          asChild={asChild}
        >
          {children}
        </Button>
      )
    },
  }
)

// Additional example for buttons with icons (how shadcn/ui actually handles icons)
figma.connect(
  Button,
  "https://www.figma.com/design/qh39N0zcMJfRKKkjPnBXKJ/shadcn-ds?node-id=1-85&variant=with-icon",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "default",
        Secondary: "secondary", 
        Destructive: "destructive",
        Outline: "outline",
        Ghost: "ghost",
        Link: "link",
      }),
      size: figma.enum("Size", {
        Large: "lg",
        Medium: "default", 
        Small: "sm",
        Icon: "icon",
      }),
      children: figma.textContent("Label"),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
    },
    
    // Example showing button with icon as children (shadcn/ui pattern)
    example: ({ variant, size, disabled, children }) => {
      return (
        <Button variant={variant} size={size} disabled={disabled}>
          {/* Icons are typically passed as children in shadcn/ui */}
          {/* <Icon className="mr-2 h-4 w-4" /> */}
          {children}
        </Button>
      )
    },
  }
)

