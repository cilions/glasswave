"use client";

import { RadioGroup, RadioGroupItem } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function RadioGroupPreview() {
  return (
    <ComponentPreview label="Radio Group">
      <RadioGroup defaultValue="option-1" className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-1" id="r1" />
          <label
            htmlFor="r1"
            className="text-sm cursor-pointer text-gray-900 dark:text-white/90"
          >
            Option One
          </label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-2" id="r2" />
          <label
            htmlFor="r2"
            className="text-sm cursor-pointer text-gray-900 dark:text-white/90"
          >
            Option Two
          </label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-3" id="r3" disabled />
          <label
            htmlFor="r3"
            className="text-sm cursor-pointer text-gray-500 dark:text-white/50"
          >
            Disabled
          </label>
        </div>
      </RadioGroup>
    </ComponentPreview>
  );
}
