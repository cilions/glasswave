import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/cn";
import { focusRing, glass } from "../lib/glass";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    const baseClasses = cn(
      glass,
      focusRing,
      "w-full px-4 py-2 placeholder:text-white/70",
    );

    return (
      <input ref={ref} className={cn(baseClasses, className)} {...props} />
    );
  },
);

Input.displayName = "Input";
