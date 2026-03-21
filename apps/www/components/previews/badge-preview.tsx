"use client";

import { Badge } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function BadgePreview() {
  return (
    <ComponentPreview label="Badge Variants">
      <div className="flex gap-4 items-center flex-wrap">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    </ComponentPreview>
  );
}
