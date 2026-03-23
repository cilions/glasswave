"use client";

import { Textarea } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function TextareaPreview() {
  return (
    <ComponentPreview label="Textarea">
      <div className="w-full max-w-sm flex flex-col gap-3">
        <Textarea placeholder="Write your message here..." rows={3} />
        <Textarea placeholder="Disabled textarea" disabled rows={3} />
      </div>
    </ComponentPreview>
  );
}
