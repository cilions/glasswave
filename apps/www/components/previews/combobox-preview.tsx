"use client";

import { Combobox } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";
import { useState } from "react";

const options = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "nuxt", label: "Nuxt" },
];

export function ComboboxPreview() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <ComponentPreview label="Combobox">
      <Combobox
        options={options}
        value={value}
        onValueChange={setValue}
        placeholder="Framework…"
      />
    </ComponentPreview>
  );
}
