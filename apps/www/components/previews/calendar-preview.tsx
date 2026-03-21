"use client";

import { Calendar } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";
import { useState } from "react";

export function CalendarPreview() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <ComponentPreview label="Calendar">
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </ComponentPreview>
  );
}
