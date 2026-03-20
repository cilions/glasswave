"use client";

import { Toast, Button } from "glasswave";
import { useState } from "react";
import { ComponentPreview } from "@/components/component-preview";

export function ToastPreview() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState<"info" | "success" | "warning" | "error">("success");

  const showToast = (t: "info" | "success" | "warning" | "error") => {
    setType(t);
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };

  return (
    <ComponentPreview label="Toast">
      <Button onClick={() => showToast("success")}>Success</Button>
      <Button onClick={() => showToast("error")} variant="destructive">Error</Button>
      <Button onClick={() => showToast("info")} variant="outline">Info</Button>
      {show && (
        <Toast
          message={
            type === "success" ? "Changes saved successfully!" :
            type === "error" ? "Something went wrong!" :
            "Here is some information."
          }
          type={type}
        />
      )}
    </ComponentPreview>
  );
}
