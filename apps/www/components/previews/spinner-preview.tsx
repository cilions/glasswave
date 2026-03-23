"use client";

import { Spinner } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function SpinnerPreview() {
  return (
    <ComponentPreview label="Spinner">
      <div className="flex gap-4 items-center">
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </div>
    </ComponentPreview>
  );
}
