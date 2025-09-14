import { type InputHTMLAttributes, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className = "", ...props }, ref) => {
  const baseClasses =
    "backdrop-blur-[20px] bg-white/20 border border-white/30 hover:bg-white/25 focus:bg-white/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder:text-white/70 w-full px-4 py-2 rounded-xl"

  return <input ref={ref} className={`${baseClasses} ${className}`} {...props} />
})

Input.displayName = "Input"
