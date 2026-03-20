"use client";

import { Input } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function InputPreview() {
  return (
    <ComponentPreview label="Input">
      <div className="w-full max-w-sm flex flex-col gap-3">
        <Input placeholder="Default input" />
        <Input placeholder="Email address" type="email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Disabled" disabled />
      </div>
    </ComponentPreview>
  );
}
