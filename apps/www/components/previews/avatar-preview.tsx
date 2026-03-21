"use client";

import { Avatar, AvatarImage, AvatarFallback } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function AvatarPreview() {
  return (
    <ComponentPreview label="Avatar">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>GW</AvatarFallback>
        </Avatar>
      </div>
    </ComponentPreview>
  );
}
