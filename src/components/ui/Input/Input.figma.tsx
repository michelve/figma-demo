import Input from './Input'
import figma from '@figma/code-connect'

/**
 * Figma Code Connect mapping for Input component
 * 
 * This file maps Figma component properties to React component props
 * Supports all input variants, sizes, and states
 */

// Main Input component connection
figma.connect(
  Input,
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=INPUT-ID', // Replace with your Figma component URL
  {
    props: {
      // Map Figma variant property to React variant prop
      variant: figma.enum('State', {
        Default: 'default',
        Error: 'error',
        Success: 'success',
      }),
      
      // Map Figma size property to React size prop
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),

      // Map text content from Figma
      placeholder: figma.string('Placeholder'),
      
      // Map boolean properties
      disabled: figma.boolean('Disabled'),
      required: figma.boolean('Required'),

      // Map input type
      type: figma.enum('Type', {
        Text: 'text',
        Email: 'email',
        Password: 'password',
        Number: 'number',
        Tel: 'tel',
        URL: 'url',
      }),
    },
    example: () => (
      <Input 
        placeholder="Enter your text..."
        variant="default"
        size="md"
        type="text"
      />
    ),
  }
)

// Text Input variant
figma.connect(
  Input,
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=INPUT-TEXT-ID',
  {
    props: {
      type: 'text',
      variant: figma.enum('State', {
        Default: 'default',
        Error: 'error',
        Success: 'success',
      }),
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      placeholder: figma.string('Placeholder'),
      disabled: figma.boolean('Disabled'),
    },
    example: () => <Input type="text" placeholder="Enter text..." />,
  }
)

// Email Input variant
figma.connect(
  Input,
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=INPUT-EMAIL-ID',
  {
    props: {
      type: 'email',
      variant: figma.enum('State', {
        Default: 'default',
        Error: 'error',
        Success: 'success',
      }),
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      placeholder: figma.string('Placeholder'),
      disabled: figma.boolean('Disabled'),
    },
    example: () => <Input type="email" placeholder="Enter email..." />,
  }
)

// Password Input variant
figma.connect(
  Input,
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=INPUT-PASSWORD-ID',
  {
    props: {
      type: 'password',
      variant: figma.enum('State', {
        Default: 'default',
        Error: 'error',
        Success: 'success',
      }),
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      placeholder: figma.string('Placeholder'),
      disabled: figma.boolean('Disabled'),
    },
    example: () => <Input type="password" placeholder="Enter password..." />,
  }
)

// Small size example
figma.connect(
  Input,
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=INPUT-SM-ID',
  {
    props: {
      size: 'sm',
      variant: figma.enum('State', {
        Default: 'default',
        Error: 'error',
        Success: 'success',
      }),
      type: figma.enum('Type', {
        Text: 'text',
        Email: 'email',
        Password: 'password',
      }),
      placeholder: figma.string('Placeholder'),
      disabled: figma.boolean('Disabled'),
    },
    example: () => <Input size="sm" placeholder="Small input..." />,
  }
)

// Large size example
figma.connect(
  Input,
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=INPUT-LG-ID',
  {
    props: {
      size: 'lg',
      variant: figma.enum('State', {
        Default: 'default',
        Error: 'error',
        Success: 'success',
      }),
      type: figma.enum('Type', {
        Text: 'text',
        Email: 'email',
        Password: 'password',
      }),
      placeholder: figma.string('Placeholder'),
      disabled: figma.boolean('Disabled'),
    },
    example: () => <Input size="lg" placeholder="Large input..." />,
  }
)

// Error state example
figma.connect(
  Input,
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=INPUT-ERROR-ID',
  {
    props: {
      variant: 'error',
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      type: figma.enum('Type', {
        Text: 'text',
        Email: 'email',
        Password: 'password',
      }),
      placeholder: figma.string('Placeholder'),
      disabled: figma.boolean('Disabled'),
    },
    example: () => <Input variant="error" placeholder="Error state..." />,
  }
)

// Success state example
figma.connect(
  Input,
  'https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP?node-id=INPUT-SUCCESS-ID',
  {
    props: {
      variant: 'success',
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
      }),
      type: figma.enum('Type', {
        Text: 'text',
        Email: 'email',
        Password: 'password',
      }),
      placeholder: figma.string('Placeholder'),
      disabled: figma.boolean('Disabled'),
    },
    example: () => <Input variant="success" placeholder="Success state..." />,
  }
)

export default Input