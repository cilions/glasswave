"use client";

import { DatePicker } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";
import { useState } from "react";

export function DatePickerPreview() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <ComponentPreview label="Date Picker">
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Pick a date"
      />
    </ComponentPreview>
  );
}
