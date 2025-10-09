import Button from './Button'
import figma from '@figma/code-connect'
// Import common icons for examples
import { Search, Download, ArrowRight, Plus, X } from 'lucide-react'

/**
 * Figma Code Connect mapping for Button component
 * 
 * This file maps Figma component properties to React component props
 * Supports all button variants, icon placements, and states
 */

// Main Button component connection
figma.connect(
  Button,
  'YOUR_FIGMA_BUTTON_URL', // Replace with your Figma component URL
  {
    props: {
      // Map Figma variant property to React variant prop
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Outline: 'outline',
      }),
      
      // Map Figma size property to React size prop
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      
      // Map Figma text content to children
      children: figma.textContent('Button Text'),
      
      // Map Figma disabled state
      disabled: figma.boolean('Disabled'),
      
      // Map icon variants - this will need to be configured based on your Figma setup
      hasIcon: figma.boolean('Has Icon'),
      
      // Icon position mapping
      iconPosition: figma.enum('Icon Position', {
        Left: 'left',
        Right: 'right',
        'Icon Only': 'only',
      }),
      
      // Icon type mapping (you'll need to adjust based on your Figma icon components)
      iconType: figma.enum('Icon Type', {
        Search: 'search',
        Download: 'download',
        Arrow: 'arrow',
        Plus: 'plus',
        Close: 'close',
      }),
    },
    
    example: ({ variant, size, children, disabled, hasIcon, iconPosition, iconType }) => {
      // Helper function to get icon component based on type
      const getIcon = (type) => {
        switch (type) {
          case 'search':
            return <Search />
          case 'download':
            return <Download />
          case 'arrow':
            return <ArrowRight />
          case 'plus':
            return <Plus />
          case 'close':
            return <X />
          default:
            return <Search /> // Default icon
        }
      }
      
      return (
        <Button
          variant={variant}
          size={size}
          disabled={disabled}
          icon={hasIcon ? getIcon(iconType) : undefined}
          iconPosition={iconPosition}
        >
          {children}
        </Button>
      )
    },
  }
)

// Primary Button with Icon Left
figma.connect(
  Button,
  'YOUR_FIGMA_PRIMARY_ICON_LEFT_URL', // Replace with specific variant URL
  {
    props: {
      children: figma.textContent('Button Text'),
      disabled: figma.boolean('Disabled'),
    },
    example: ({ children, disabled }) => (
      <Button
        variant="primary"
        icon={<Search />}
        iconPosition="left"
        disabled={disabled}
      >
        {children}
      </Button>
    ),
  }
)

// Icon Only Button
figma.connect(
  Button,
  'YOUR_FIGMA_ICON_ONLY_URL', // Replace with icon-only variant URL
  {
    props: {
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Outline: 'outline',
      }),
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      disabled: figma.boolean('Disabled'),
      iconType: figma.enum('Icon Type', {
        Search: 'search',
        Download: 'download',
        Arrow: 'arrow',
        Plus: 'plus',
        Close: 'close',
      }),
    },
    example: ({ variant, size, disabled, iconType }) => {
      const getIcon = (type) => {
        switch (type) {
          case 'search':
            return <Search />
          case 'download':
            return <Download />
          case 'arrow':
            return <ArrowRight />
          case 'plus':
            return <Plus />
          case 'close':
            return <X />
          default:
            return <Search />
        }
      }
      
      return (
        <Button
          variant={variant}
          size={size}
          disabled={disabled}
          icon={getIcon(iconType)}
          iconPosition="only"
        />
      )
    },
  }
)

export default Button