"use client";

import { Button, ButtonGroup } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function ButtonGroupPreview() {
  return (
    <ComponentPreview label="Button Group">
      <div className="flex flex-col gap-4 items-center">
        <ButtonGroup>
          <Button size="sm">Left</Button>
          <Button size="sm">Middle</Button>
          <Button size="sm">Right</Button>
        </ButtonGroup>
        <ButtonGroup orientation="vertical">
          <Button size="sm">Top</Button>
          <Button size="sm">Middle</Button>
          <Button size="sm">Bottom</Button>
        </ButtonGroup>
      </div>
    </ComponentPreview>
  );
}
