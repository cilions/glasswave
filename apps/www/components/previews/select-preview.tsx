"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function SelectPreview() {
  return (
    <ComponentPreview label="Select">
      <div className="w-full max-w-sm flex flex-col gap-3">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Pick a fruit..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Pick a framework..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="svelte">Svelte</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </ComponentPreview>
  );
}
