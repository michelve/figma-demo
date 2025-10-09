import React from 'react'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { Check, Minus } from 'lucide-react'
import './Checkbox.css'

// Checkbox variants using class-variance-authority
const checkboxVariants = cva(
  'checkbox', // base class
  {
    variants: {
      variant: {
        default: 'checkbox--default',
        readonly: 'checkbox--readonly',
        disabled: 'checkbox--disabled',
      },
      state: {
        unchecked: 'checkbox--unchecked',
        checked: 'checkbox--checked',
        indeterminate: 'checkbox--indeterminate',
      }
    },
    defaultVariants: {
      variant: 'default',
      state: 'unchecked',
    },
  }
)

/**
 * Checkbox Component
 * 
 * A simplified checkbox component with essential variants and states.
 * Built with semantic design tokens for consistent styling.
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Style variant: 'default', 'readonly', 'disabled'
 * @param {boolean} props.checked - Controlled checked state
 * @param {boolean} props.indeterminate - Indeterminate state (overrides checked)
 * @param {boolean} props.disabled - Disabled state
 * @param {boolean} props.readonly - Readonly state
 * @param {string} props.label - Accessible label text
 * @param {string} props.description - Optional description text
 * @param {function} props.onChange - Change handler function
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.rest - Other HTML input attributes
 */
const Checkbox = React.forwardRef(({
  variant = 'default',
  checked = false,
  indeterminate = false,
  disabled = false,
  readonly = false,
  label,
  description,
  onChange,
  className,
  id,
  ...rest
}, ref) => {
  // Generate unique ID if not provided
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`
  
  // Determine state based on indeterminate and checked
  const state = indeterminate ? 'indeterminate' : (checked ? 'checked' : 'unchecked')
  
  // Determine final variant based on props
  const finalVariant = disabled ? 'disabled' : (readonly ? 'readonly' : variant)
  
  // Handle change events
  const handleChange = (event) => {
    if (disabled || readonly) return
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div className={clsx('checkbox-wrapper', (disabled || readonly) && 'checkbox-wrapper--disabled', className)}>
      <div className="checkbox-container">
        {/* Hidden native input for accessibility */}
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          checked={checked}
          onChange={handleChange}
          disabled={disabled || readonly}
          className="checkbox-input"
          aria-describedby={description ? `${checkboxId}-description` : undefined}
          {...rest}
        />
        
        {/* Custom styled checkbox */}
        <div 
          className={checkboxVariants({ variant: finalVariant, state })}
          aria-hidden="true"
        >
          {/* Check icon for checked state */}
          {checked && !indeterminate && (
            <Check 
              className="checkbox-icon checkbox-icon--check" 
              size={16}
            />
          )}
          
          {/* Minus icon for indeterminate state */}
          {indeterminate && (
            <Minus 
              className="checkbox-icon checkbox-icon--indeterminate" 
              size={16}
            />
          )}
        </div>
      </div>
      
      {/* Label and description */}
      {(label || description) && (
        <div className="checkbox-content">
          {label && (
            <label 
              htmlFor={checkboxId}
              className={clsx(
                'checkbox-label',
                (disabled || readonly) && 'checkbox-label--disabled'
              )}
            >
              {label}
            </label>
          )}
          
          {description && (
            <div 
              id={`${checkboxId}-description`}
              className={clsx(
                'checkbox-description',
                (disabled || readonly) && 'checkbox-description--disabled'
              )}
            >
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox