"use client";

import { type ReactNode, useState, useRef } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export function Tooltip({
  content,
  children,
  position = "top",
  className = "",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  const tooltipClasses =
    "backdrop-blur-[20px] bg-white/10 border border-white/20 absolute z-50 px-3 py-2 rounded-lg whitespace-nowrap text-sm text-white animate-in fade-in-0 zoom-in-95";

  return (
    <button
      type="button"
      className="relative inline-block bg-transparent border-none p-0 m-0"
      aria-describedby="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      style={{ outline: "none" }}
    >
      {children}

      {isVisible && (
        <div
          id="tooltip"
          ref={tooltipRef}
          className={`${tooltipClasses} ${positionClasses[position]} ${className}`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </button>
  );
}
