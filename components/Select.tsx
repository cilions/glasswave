"use client"

import { useState, useRef, useEffect } from "react"

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  value: string
  onChange: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  className?: string
  disabled?: boolean
}

export function Select({
  value,
  onChange,
  options,
  placeholder = "Выберите опцию",
  className = "",
  disabled,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((option) => option.value === value)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const buttonClasses =
    "backdrop-blur-[20px] bg-white/20 border border-white/30 hover:bg-white/25 focus:bg-white/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white text-left w-full px-4 py-2 rounded-xl flex items-center justify-between"
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""
  const dropdownClasses =
    "backdrop-blur-[20px] bg-white/20 border border-white/30 absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden z-50 shadow-lg"
  const arrowClasses = `w-4 h-4 text-white/70 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`

  return (
    <div ref={selectRef} className="relative">
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`${buttonClasses} ${disabledClasses} ${className}`}
      >
        <span className={selectedOption ? "text-white" : "text-white/70"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg className={arrowClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={dropdownClasses}>
          {options.map((option) => {
            const optionClasses = `w-full px-4 py-2 text-left text-white hover:bg-white/30 transition-colors duration-150 ${
              value === option.value ? "bg-white/25" : ""
            }`

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
                className={optionClasses}
              >
                {option.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
