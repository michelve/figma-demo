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
      // Map Figma variants to React props
      variant: figma.enum("Variant", {
        Primary: "default",
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
      
      // Map state to disabled prop (only disabled state maps to true)
      disabled: figma.enum("State", {
        Disabled: true,
        Default: undefined,
        Hover: undefined, // Hover state doesn't affect disabled prop
      }),
      
      // Map text content from Figma text layer
      children: figma.textContent("Label"),
      
      // Map icon start properties
      hasIconStart: figma.boolean("Has Icon Start"),
      iconStart: figma.instance("Icon Start"),
      
      // Map icon end properties  
      hasIconEnd: figma.boolean("Has Icon End"),
      iconEnd: figma.instance("Icon End"),
      
      // Support for asChild prop (shadcn/ui feature)
      asChild: figma.boolean("As Child", {
        true: true,
        false: false,
      }),
    },

    // Main example showing how the component renders in code
    example: ({ variant, size, disabled, children, hasIconStart, iconStart, hasIconEnd, iconEnd, asChild }) => {
      return (
        <Button 
          variant={variant} 
          size={size} 
          disabled={disabled}
          asChild={asChild}
        >
          {hasIconStart && iconStart}
          {children || "Button"}
          {hasIconEnd && iconEnd}
        </Button>
      )
    },
  }
)

