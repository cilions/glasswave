"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { forwardRef } from "react";
import { cn } from "../lib/cn";
import { glass, focusRing } from "../lib/glass";

export const Select = RadixSelect.Root;

export const SelectTrigger = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger>
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Trigger
    ref={ref}
    className={cn(
      glass,
      focusRing,
      "text-white text-left w-full px-4 py-2 rounded-xl inline-flex items-center justify-between gap-2",
      className,
    )}
    {...props}
  >
    {children}
  </RadixSelect.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

export const SelectValue = RadixSelect.Value;

export const SelectContent = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Content>
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Portal>
    <RadixSelect.Content
      ref={ref}
      className={cn(glass, "rounded-xl overflow-hidden shadow-lg", className)}
      {...props}
    >
      <RadixSelect.Viewport className="p-1">{children}</RadixSelect.Viewport>
    </RadixSelect.Content>
  </RadixSelect.Portal>
));
SelectContent.displayName = "SelectContent";

export const SelectItem = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Item>
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Item
    ref={ref}
    className={cn(
      "w-full text-left text-white px-3 py-2 rounded-md outline-none select-none",
      "data-[highlighted]:bg-white/20 data-[state=checked]:bg-white/25",
      className,
    )}
    {...props}
  >
    <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
  </RadixSelect.Item>
));
SelectItem.displayName = "SelectItem";
