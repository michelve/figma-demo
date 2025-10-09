import React from 'react'
import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'
import './Button.css'

// Define button variants using class-variance-authority
const buttonVariants = cva(
  'btn', // base classes
  {
    variants: {
      variant: {
        primary: 'btn--primary',
        secondary: 'btn--secondary',
        outline: 'btn--outline',
      },
      size: {
        sm: 'btn--sm',
        md: 'btn--md',
        lg: 'btn--lg',
      },
      iconPosition: {
        left: 'btn--icon-left',
        right: 'btn--icon-right',
        only: 'btn--icon-only',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

/**
 * Custom Button Component
 * Built for Figma Code Connect integration
 * 
 * @param {Object} props - Component props
 * @param {'primary'|'secondary'|'outline'} props.variant - Button style variant
 * @param {'sm'|'md'|'lg'} props.size - Button size
 * @param {React.ReactNode} props.children - Button text content
 * @param {React.ReactNode} props.icon - Icon component (from lucide-react)
 * @param {'left'|'right'|'only'} props.iconPosition - Icon placement
 * @param {boolean} props.disabled - Disabled state
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.type - Button type (button, submit, reset)
 */
const Button = React.forwardRef(({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  className,
  type = 'button',
  ...props
}, ref) => {
  // Determine if we show icon only
  const isIconOnly = iconPosition === 'only' || (!children && icon)
  
  // Calculate final icon position
  const finalIconPosition = isIconOnly ? 'only' : iconPosition

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        buttonVariants({ 
          variant, 
          size, 
          iconPosition: finalIconPosition 
        }),
        disabled && 'btn--disabled',
        className
      )}
      {...props}
    >
      {/* Left icon */}
      {icon && (iconPosition === 'left' || isIconOnly) && (
        <span className="btn__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      
      {/* Button text */}
      {children && !isIconOnly && (
        <span className="btn__text">
          {children}
        </span>
      )}
      
      {/* Right icon */}
      {icon && iconPosition === 'right' && !isIconOnly && (
        <span className="btn__icon" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  )
})

Button.displayName = 'Button'

export default Button