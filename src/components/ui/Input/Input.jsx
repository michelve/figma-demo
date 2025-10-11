import React from 'react'
import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'
import './Input.css'

// Define input variants using class-variance-authority
const inputVariants = cva(
  'input', // base classes
  {
    variants: {
      variant: {
        default: 'input--default',
        error: 'input--error',
        success: 'input--success',
      },
      size: {
        sm: 'input--sm',
        md: 'input--md',
        lg: 'input--lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

/**
 * Custom Input Component
 * Built for Figma Code Connect integration
 * 
 * @param {Object} props - Component props
 * @param {'default'|'error'|'success'} props.variant - Input style variant
 * @param {'sm'|'md'|'lg'} props.size - Input size
 * @param {string} props.type - Input type (text, email, password, etc.)
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {boolean} props.disabled - Disabled state
 * @param {boolean} props.required - Required field
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.id - Input ID for labels
 * @param {string} props.name - Input name attribute
 */
const Input = React.forwardRef(({
  variant = 'default',
  size = 'md',
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  className,
  id,
  name,
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      className={clsx(
        inputVariants({ variant, size }),
        disabled && 'input--disabled',
        className
      )}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input