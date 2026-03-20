"use client";

import { Alert, AlertTitle, AlertDescription } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function AlertPreview() {
  return (
    <ComponentPreview label="Alert">
      <div className="w-full max-w-sm flex flex-col gap-3">
        <Alert variant="default">
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>This is a default alert with some information.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong. Please try again.</AlertDescription>
        </Alert>
      </div>
    </ComponentPreview>
  );
}
