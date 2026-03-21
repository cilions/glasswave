"use client";

import { NativeSelect } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function NativeSelectPreview() {
  return (
    <ComponentPreview label="Native Select">
      <NativeSelect className="max-w-xs" defaultValue="a">
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="c">Option C</option>
      </NativeSelect>
    </ComponentPreview>
  );
}
