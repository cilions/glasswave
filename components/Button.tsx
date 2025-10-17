import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";
import { focusRing, glass, glassInteractive } from "../lib/glass";

const buttonVariants = cva(
  `${glass} ${glassInteractive} ${focusRing} font-medium`,
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-transparent border-white/30 hover:bg-white/10 text-white",
        destructive: "bg-red-500/30 border-red-400/40 hover:bg-red-500/40",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        icon: "h-10 w-10 p-0 inline-flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
