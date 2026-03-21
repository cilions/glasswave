"use client";

import { Popover, PopoverTrigger, PopoverContent, Button } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function PopoverPreview() {
  return (
    <ComponentPreview label="Popover">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4 text-white">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-white/70">
                Set the dimensions for the layer.
              </p>
            </div>
            {/* Form grid placeholders */}
            <div className="text-sm text-white/50">Form contents go here...</div>
          </div>
        </PopoverContent>
      </Popover>
    </ComponentPreview>
  );
}
