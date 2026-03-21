"use client";

import { Progress } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";
import { useEffect, useState } from "react";

export function ProgressPreview() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ComponentPreview label="Progress">
      <div className="w-[300px]">
        <Progress value={progress} />
      </div>
    </ComponentPreview>
  );
}
