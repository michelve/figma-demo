import figma from '@figma/code-connect'
import Checkbox from './Checkbox'

/**
 * Figma Code Connect for Checkbox Component
 * 
 * This file maps Figma checkbox designs to our React component,
 * enabling automatic code generation in Figma Dev Mode.
 */

figma.connect(Checkbox, 'https://www.figma.com/design/your-file-id/Design-System', {
  props: {
    // Variant mapping - simplified to 3 variants
    variant: figma.enum('Variant', {
      'Default': 'default',
      'Readonly': 'readonly',
      'Disabled': 'disabled',
    }),
    
    // State mapping
    checked: figma.boolean('Checked', {
      true: true,
      false: false,
    }),
    
    indeterminate: figma.boolean('Indeterminate', {
      true: true,
      false: false,
    }),
    
    // Text content mapping
    label: figma.textContent('Label'),
    description: figma.textContent('Description'),
  },
  
  example: ({
    variant,
    checked,
    indeterminate,
    label,
    description
  }) => (
    <Checkbox
      variant={variant}
      checked={checked}
      indeterminate={indeterminate}
      readonly={variant === 'readonly'}
      disabled={variant === 'disabled'}
      label={label}
      description={description}
      onChange={() => {}}
    />
  ),
})

// Additional mapping for checkbox without label (icon only)
figma.connect(Checkbox, 'https://www.figma.com/design/your-file-id/Design-System', {
  variant: { 'Has Label': 'false' },
  props: {
    variant: figma.enum('Variant', {
      'Default': 'default',
      'Readonly': 'readonly', 
      'Disabled': 'disabled',
    }),
    checked: figma.boolean('Checked'),
    indeterminate: figma.boolean('Indeterminate'),
  },
  example: ({ variant, checked, indeterminate }) => (
    <Checkbox
      variant={variant}
      checked={checked}
      indeterminate={indeterminate}
      readonly={variant === 'readonly'}
      disabled={variant === 'disabled'}
      onChange={() => {}}
    />
  ),
})

// Specific mapping for form field with checkbox
figma.connect(Checkbox, 'https://www.figma.com/design/your-file-id/Design-System', {
  variant: { 'Type': 'Form Field' },
  props: {
    variant: figma.enum('Variant', {
      'Default': 'default',
      'Readonly': 'readonly',
      'Disabled': 'disabled',
    }),
    label: figma.textContent('Field Label'),
    description: figma.textContent('Help Text'),
    checked: figma.boolean('Checked'),
  },
  example: ({ variant, label, description, checked }) => (
    <Checkbox
      variant={variant}
      label={label}
      description={description}
      checked={checked}
      readonly={variant === 'readonly'}
      disabled={variant === 'disabled'}
      onChange={() => {}}
    />
  ),
})

export default Checkbox