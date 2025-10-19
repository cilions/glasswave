import { type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/cn";
import { focusRing, glass } from "../lib/glass";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => {
    const baseClasses = cn(
      glass,
      focusRing,
      "w-full px-4 py-2 resize-none",
    );

    return (
      <textarea ref={ref} className={cn(baseClasses, className)} {...props} />
    );
  },
);

Textarea.displayName = "Textarea";
