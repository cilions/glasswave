"use client";

import { Kbd } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function KbdPreview() {
  return (
    <ComponentPreview label="Kbd">
      <p className="flex flex-wrap items-center gap-2 text-sm text-current/80">
        Press <Kbd>⌘</Kbd>
        <span>+</span>
        <Kbd>K</Kbd>
        <span>to open command palette</span>
      </p>
    </ComponentPreview>
  );
}
