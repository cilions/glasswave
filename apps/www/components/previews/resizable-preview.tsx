"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function ResizablePreview() {
  return (
    <ComponentPreview label="Resizable">
      <div className="h-48 w-full max-w-lg rounded-[32px] border border-white/10 p-1">
        <ResizablePanelGroup orientation="horizontal" className="h-full rounded-[28px]">
          <ResizablePanel defaultSize={45} className="flex items-center justify-center rounded-2xl bg-white/[0.04] text-sm">
            Panel A
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={55} className="flex items-center justify-center rounded-2xl bg-white/[0.04] text-sm">
            Panel B
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </ComponentPreview>
  );
}
