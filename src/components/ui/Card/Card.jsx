import React from 'react'
import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'
import './Card.css'

const cardVariants = cva('card', {
  variants: {
    variant: {
      default: 'card--default',
      form: 'card--form'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

/**
 * Card Component
 * Semantic design system card with structured content areas
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Main content area (can be anything)
 * @param {string} props.title - Card heading title
 * @param {string} props.description - Description text under title
 * @param {boolean} props.showDivider - Show divider between description and content (default: true)
 * @param {boolean} props.showButton - Show button in form variant (default: true for form)
 * @param {string} props.variant - Card variant: 'default' | 'form'
 * @param {string} props.className - Additional CSS classes
 */
const Card = React.forwardRef(({
  children,
  title,
  description,
  showDivider = true,
  showButton = true,
  variant = 'default',
  className,
  ...props
}, ref) => {
  return (
    <div 
      ref={ref}
      className={clsx(cardVariants({ variant }), className)}
      {...props}
    >
      {/* Header Section - Title and Description */}
      {(title || description) && (
        <div className="card__header">
          {title && (
            <h3 className="card__title">
              {title}
            </h3>
          )}
          {description && (
            <p className="card__description">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Divider - Semantic border separator */}
      {showDivider && (title || description) && children && (
        <div className="card__divider" />
      )}

      {/* Content Section - Flexible content area */}
      {children && (
        <div className="card__content">
          {children}
        </div>
      )}
    </div>
  )
})

Card.displayName = 'Card'

export default Card