import { type TextareaHTMLAttributes, forwardRef } from "react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className = "", ...props }, ref) => {
  const baseClasses =
    "backdrop-blur-[20px] bg-white/10 border border-white/20 hover:bg-white/15 focus:bg-white/15 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 text-white placeholder:text-white/60 w-full px-4 py-2 rounded-xl resize-none"

  return <textarea ref={ref} className={`${baseClasses} ${className}`} {...props} />
})

Textarea.displayName = "Textarea"
