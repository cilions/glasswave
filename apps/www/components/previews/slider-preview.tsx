"use client";

import { Slider } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function SliderPreview() {
  return (
    <ComponentPreview label="Slider">
      <div className="w-[300px]">
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
    </ComponentPreview>
  );
}
