"use client";

import { Checkbox } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function CheckboxPreview() {
  return (
    <ComponentPreview label="Checkbox">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm cursor-pointer">
            Accept terms and conditions
          </label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="newsletter" defaultChecked />
          <label htmlFor="newsletter" className="text-sm cursor-pointer">
            Subscribe to newsletter
          </label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="disabled" disabled />
          <label htmlFor="disabled" className="text-sm cursor-pointer">
            Disabled option
          </label>
        </div>
      </div>
    </ComponentPreview>
  );
}
