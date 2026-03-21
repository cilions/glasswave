import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { focusRing, glass, glassInteractive } from "@/lib/glass";

export const buttonVariants = cva(
  `${glass} ${glassInteractive} ${focusRing} font-medium rounded-full`,
  {
    variants: {
      variant: {
        default: "bg-[#007AFF] hover:bg-[#007AFF]/90 text-white shadow-sm",
        secondary: "",
        destructive: "!text-[#FF3B30]",
      },
      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-2 text-lg",
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
