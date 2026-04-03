"use client";

import type { ReactNode } from "react";

interface ComponentPreviewProps {
  children: ReactNode;
  label?: string;
}

export function ComponentPreview({ children, label }: ComponentPreviewProps) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/20">
      {label && (
        <div className="px-4 py-2 text-xs font-medium text-slate-500 dark:text-white/40 border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5">
          {label}
        </div>
      )}
      <div className="relative flex flex-wrap min-h-[160px] items-center justify-center p-10">
        <div className="relative flex flex-wrap gap-4 items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
