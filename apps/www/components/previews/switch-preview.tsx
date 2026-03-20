"use client";

import { Switch } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function SwitchPreview() {
  return (
    <ComponentPreview label="Switch">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Switch id="notifications" />
          <label htmlFor="notifications" className="text-sm cursor-pointer">Notifications</label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="dark-mode" defaultChecked />
          <label htmlFor="dark-mode" className="text-sm cursor-pointer">Dark mode</label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="disabled-switch" disabled />
          <label htmlFor="disabled-switch" className="text-sm cursor-pointer">Disabled</label>
        </div>
      </div>
    </ComponentPreview>
  );
}
