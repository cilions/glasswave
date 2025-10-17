import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { glass } from "../lib/glass";

interface AlertProps {
  children: ReactNode;
  variant?: "default" | "destructive";
  className?: string;
}

export function Alert({
  children,
  variant = "default",
  className = "",
}: AlertProps) {
  const variantClasses = {
    default: "",
    destructive: "text-red-100 bg-red-500/20 border-red-400/40",
  } as const;

  return (
    <div
      role="alert"
      className={cn(
        glass,
        "border p-4 flex items-start gap-3",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}

interface AlertTitleProps {
  children: ReactNode;
  className?: string;
}

export function AlertTitle({ children, className = "" }: AlertTitleProps) {
  return (
    <div className={cn("font-semibold leading-6", className)}>{children}</div>
  );
}

interface AlertDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function AlertDescription({
  children,
  className = "",
}: AlertDescriptionProps) {
  return (
    <div className={cn("text-sm/6 opacity-90", className)}>{children}</div>
  );
}
