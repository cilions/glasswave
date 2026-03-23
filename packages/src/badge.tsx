import { type HTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { glass } from "@/lib/glass";

const badgeVariants = cva(
  `${glass} inline-flex items-center !rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2`,
  {
    variants: {
      variant: {
        default: "bg-[#007AFF] hover:bg-[#007AFF]/90 text-white shadow-sm border-0",
        secondary: "",
        destructive: "!text-[#FF3B30]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(({ className, variant, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  );
});
Badge.displayName = "Badge";
