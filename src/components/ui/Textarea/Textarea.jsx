import React from 'react'
import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'
import './Textarea.css'

// Define textarea variants using class-variance-authority
const textareaVariants = cva(
  'textarea', // base classes
  {
    variants: {
      variant: {
        default: 'textarea--default',
        error: 'textarea--error',
        success: 'textarea--success',
      },
      size: {
        sm: 'textarea--sm',
        md: 'textarea--md',
        lg: 'textarea--lg',
      },
      resize: {
        none: 'textarea--resize-none',
        vertical: 'textarea--resize-vertical',
        horizontal: 'textarea--resize-horizontal',
        both: 'textarea--resize-both',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      resize: 'vertical',
    },
  }
)

/**
 * Custom Textarea Component
 * Built for Figma Code Connect integration
 * 
 * @param {Object} props - Component props
 * @param {'default'|'error'|'success'} props.variant - Textarea style variant
 * @param {'sm'|'md'|'lg'} props.size - Textarea size
 * @param {'none'|'vertical'|'horizontal'|'both'} props.resize - Resize behavior
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Textarea value
 * @param {Function} props.onChange - Change handler
 * @param {boolean} props.disabled - Disabled state
 * @param {boolean} props.required - Required field
 * @param {number} props.rows - Number of visible rows
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.id - Textarea ID for labels
 * @param {string} props.name - Textarea name attribute
 */
const Textarea = React.forwardRef(({
  variant = 'default',
  size = 'md',
  resize = 'vertical',
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  rows = 3,
  className,
  id,
  name,
  ...props
}, ref) => {
  return (
    <textarea
      ref={ref}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      rows={rows}
      className={clsx(
        textareaVariants({ variant, size, resize }),
        disabled && 'textarea--disabled',
        className
      )}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export default Textarea