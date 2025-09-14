"use client"

import { forwardRef } from "react"

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  id?: string
  className?: string
  disabled?: boolean
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, onChange, id, className = "", disabled, ...props }, ref) => {
    const baseClasses =
      "backdrop-blur-[20px] bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer focus-within:ring-2 focus-within:ring-white/30 w-11 h-6 rounded-full flex items-center relative"
    const checkedClasses = checked ? "bg-blue-500/30 border-blue-400/40" : ""
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""
    const thumbClasses = `w-4 h-4 bg-white rounded-full transition-transform duration-200 shadow-sm ${
      checked ? "translate-x-6" : "translate-x-1"
    }`

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
        <label htmlFor={id} className={`${baseClasses} ${checkedClasses} ${disabledClasses} ${className}`}>
          <div className={thumbClasses} />
        </label>
      </div>
    )
  },
)

Switch.displayName = "Switch"
