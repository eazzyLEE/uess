import React from 'react'
import { Spinner } from "./Spinner"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline' | 'ghost'
  isLoading?: boolean
  title?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", size = 'md', variant = 'default', isLoading, children, title, ...props }, ref) => {
    // Base styles that are always applied
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    
    // Size styles
    const sizeStyles = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-6 text-lg'
    }
    
    // Variant styles
    const variantStyles = {
      default: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500',
      ghost: 'bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500'
    }
    
    // Width styles - only apply w-full for md size by default
    const widthStyles = size === 'md' ? 'w-full' : ''
    
    // Combine all styles
    const combinedClassName = `${baseStyles} ${sizeStyles[size as keyof typeof sizeStyles]} ${variantStyles[variant as keyof typeof variantStyles]} ${widthStyles} ${className}`
    
    // Handle content
    const handleContent = () => {
      if (children) {
        return children
      }
      if (isLoading) {
        return (
          <>
            <Spinner className="border-white mr-2" />
            <span>Submitting...</span>
          </>
        )
      }
      return <span>{title || "Submit"}</span>
    }
    
    return (
      <button
        ref={ref}
        type="submit"
        disabled={isLoading}
        className={combinedClassName}
        {...props}
      >
        {handleContent()}
      </button>
    )
  }
)

Button.displayName = 'Button'