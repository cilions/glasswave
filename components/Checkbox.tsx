"use client"

import { forwardRef } from "react"

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  id?: string
  className?: string
  disabled?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, onChange, id, className = "", disabled, ...props }, ref) => {
    const baseClasses =
      "backdrop-blur-[20px] bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer focus-within:ring-2 focus-within:ring-white/30 w-5 h-5 rounded-md flex items-center justify-center"
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""

    return (
      <div className="relative">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
          {...props}
        />
        <label htmlFor={id} className={`${baseClasses} ${disabledClasses} ${className}`}>
          {checked && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </label>
      </div>
    )
  },
)

Checkbox.displayName = "Checkbox"
