"use client";

import { Separator } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function SeparatorPreview() {
  return (
    <ComponentPreview label="Separator">
      <div className="text-gray-900 dark:text-white w-[300px]">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Glasswave Primitives</h4>
          <p className="text-sm text-gray-600 dark:text-white/60">An open-source UI component library.</p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm text-gray-700 dark:text-white/80">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    </ComponentPreview>
  );
}
