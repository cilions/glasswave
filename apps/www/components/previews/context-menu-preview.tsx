"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function ContextMenuPreview() {
  return (
    <ComponentPreview label="Context Menu">
      <ContextMenu>
        <ContextMenuTrigger className="flex h-32 w-48 items-center justify-center rounded-[32px] border border-dashed border-white/20 text-sm text-current/70">
          Right click
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem disabled>Forward</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem className="text-[#FF3B30]">Reload</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </ComponentPreview>
  );
}
