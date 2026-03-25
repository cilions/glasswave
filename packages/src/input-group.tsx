import { forwardRef } from "react";
import { cn } from "../../lib/cn";
import { glass, focusRing } from "../../lib/glass";

export function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      className={cn("relative flex w-full min-w-0 items-stretch", className)}
      {...props}
    />
  );
}

export const InputGroupAddon = forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { align?: "inline-start" | "inline-end" }
>(({ className, align = "inline-start", ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    data-slot="input-group-addon"
    data-align={align}
    className={cn(
      "pointer-events-none z-10 flex items-center justify-center px-3 text-sm text-current/60",
      align === "inline-start" && "absolute inset-y-0 start-0",
      align === "inline-end" && "absolute inset-y-0 end-0",
      className,
    )}
    {...props}
  />
));
InputGroupAddon.displayName = "InputGroupAddon";

export const InputGroupInput = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      data-slot="input-group-input"
      className={cn(
        glass,
        focusRing,
        "h-10 w-full min-w-0 rounded-xl px-4 py-2",
        className,
      )}
      {...props}
    />
  ),
);
InputGroupInput.displayName = "InputGroupInput";

export function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="input-group-text"
      className={cn("text-sm text-current/70", className)}
      {...props}
    />
  );
}
