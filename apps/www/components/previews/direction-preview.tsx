"use client";

import { DirectionProvider } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function DirectionPreview() {
  return (
    <ComponentPreview label="Direction (RTL)">
      <DirectionProvider dir="rtl">
        <p dir="rtl" className="max-w-xs text-sm text-current/80">
          This paragraph flows right-to-left. Wrap subtrees that need explicit direction with{" "}
          <code className="rounded bg-white/10 px-1">DirectionProvider</code>.
        </p>
      </DirectionProvider>
    </ComponentPreview>
  );
}
