import { type ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "danger"
  size?: "sm" | "md" | "lg"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", children, ...props }, ref) => {
    const baseClasses =
      "backdrop-blur-[20px] bg-white/20 border border-white/30 hover:bg-white/30 active:bg-white/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/20 font-medium text-white rounded-xl"

    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    }

    const variantClasses = {
      default: "",
      primary: "bg-blue-500/30 border-blue-400/40 hover:bg-blue-500/40",
      secondary: "bg-gray-500/30 border-gray-400/40 hover:bg-gray-500/40",
      danger: "bg-red-500/30 border-red-400/40 hover:bg-red-500/40",
    }

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"
