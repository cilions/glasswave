"use client";

import * as RadixToast from "@radix-ui/react-toast";
import { cn } from "../lib/cn";

interface ToastProps {
  message: string;
  type?: "info" | "success" | "warning" | "error";
  duration?: number;
  className?: string;
}

export function Toast({
  message,
  type = "info",
  duration = 5000,
  className = "",
}: ToastProps) {
  const colors = {
    info: "text-blue-200 bg-blue-500/20 border-blue-400/30",
    success: "text-green-200 bg-green-500/20 border-green-400/30",
    warning: "text-yellow-200 bg-yellow-500/20 border-yellow-400/30",
    error: "text-red-200 bg-red-500/20 border-red-400/30",
  } as const;

  return (
    <RadixToast.Provider swipeDirection="right" duration={duration}>
      <RadixToast.Root
        className={cn(
          "backdrop-blur-[20px] border fixed top-4 right-4 p-4 rounded-xl flex items-center justify-between gap-3 z-50 min-w-[300px] max-w-[500px]",
          colors[type],
          className,
        )}
      >
        <RadixToast.Description asChild>
          <span>{message}</span>
        </RadixToast.Description>
        <RadixToast.Close aria-label="Close" className="hover:opacity-70">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </RadixToast.Close>
      </RadixToast.Root>
      <RadixToast.Viewport className="fixed top-4 right-4 z-[60]" />
    </RadixToast.Provider>
  );
}
