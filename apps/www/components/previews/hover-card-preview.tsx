"use client";

import { HoverCard, HoverCardTrigger, HoverCardContent } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function HoverCardPreview() {
  const cardContent = (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">@glasswave</h4>
      <p className="text-sm opacity-70">
        A beautiful UI library for modern applications.
      </p>
      <p className="text-xs opacity-50">
        Joined December 2026
      </p>
    </div>
  );

  return (
    <ComponentPreview label="Hover Card">
      <div className="flex flex-wrap gap-8 items-center justify-center">
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="text-sm font-semibold underline cursor-pointer">Top</span>
          </HoverCardTrigger>
          <HoverCardContent side="top" className="w-64">
            {cardContent}
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="text-sm font-semibold underline cursor-pointer">Bottom</span>
          </HoverCardTrigger>
          <HoverCardContent side="bottom" className="w-64">
            {cardContent}
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="text-sm font-semibold underline cursor-pointer">Left</span>
          </HoverCardTrigger>
          <HoverCardContent side="left" className="w-64">
            {cardContent}
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="text-sm font-semibold underline cursor-pointer">Right</span>
          </HoverCardTrigger>
          <HoverCardContent side="right" className="w-64">
            {cardContent}
          </HoverCardContent>
        </HoverCard>
      </div>
    </ComponentPreview>
  );
}
