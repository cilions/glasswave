"use client";

import { Tooltip, Button } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function TooltipPreview() {
  return (
    <ComponentPreview label="Tooltip">
      <Tooltip content="This is a helpful tooltip">
        <Button>Hover me</Button>
      </Tooltip>
      <Tooltip content="Delete this item">
        <Button variant="destructive" size="icon" aria-label="Delete">🗑️</Button>
      </Tooltip>
      <Tooltip content="Open settings">
        <Button variant="outline" size="icon" aria-label="Settings">⚙️</Button>
      </Tooltip>
    </ComponentPreview>
  );
}
