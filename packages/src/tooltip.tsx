"use client";

import * as RadixTooltip from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { glass } from "@/lib/glass";

interface TooltipProps {
  content: string;
  children: ReactNode;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
}

export function Tooltip({ content, children, className = "", side = "top" }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={150}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <span className="inline-flex">{children}</span>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            sideOffset={8}
            className={cn(
              glass,
              "bg-white dark:bg-zinc-950",
              "px-3 py-2 rounded-[32px] border border-white/[0.18] dark:border-white/[0.25] text-sm animate-in fade-in-0 zoom-in-95",
              className,
            )}
          >
            {content}
            <RadixTooltip.Arrow className="fill-white/20" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
