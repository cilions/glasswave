"use client";

import type { ReactNode } from "react";

interface ComponentPreviewProps {
  children: ReactNode;
  label?: string;
}

export function ComponentPreview({ children, label }: ComponentPreviewProps) {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-sm">
      {label && (
        <div className="px-4 py-2 text-xs font-medium text-fd-muted-foreground border-b border-neutral-200 dark:border-white/10 bg-fd-card">
          {label}
        </div>
      )}
      <div className="relative flex flex-wrap min-h-[160px] items-center justify-center p-10 bg-fd-background bg-[url('https://mdx.fumadocs.com/grid.svg')] dark:bg-[url('https://mdx.fumadocs.com/grid-dark.svg')]">
        <div className="absolute inset-0 bg-fd-background/5" />
        <div className="relative flex flex-wrap gap-4 items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
