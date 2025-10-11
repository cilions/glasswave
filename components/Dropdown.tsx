"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";

interface DropdownItem {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  className?: string;
}

export function Dropdown({ trigger, items, className = "" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownClasses =
    "backdrop-blur-[20px] bg-white/10 border border-white/20 absolute top-full left-0 mt-1 rounded-xl overflow-hidden z-50 min-w-[200px] shadow-lg";

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(!isOpen);
          }
        }}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="bg-transparent border-none p-0 m-0 cursor-pointer"
      >
        {trigger}
      </button>

      {isOpen && (
        <div className={`${dropdownClasses} ${className}`}>
          {items.map((item) => {
            const buttonClasses = `w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors duration-150 ${
              item.disabled
                ? "opacity-50 cursor-not-allowed hover:bg-transparent"
                : ""
            }`;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  if (!item.disabled) {
                    item.onClick();
                    setIsOpen(false);
                  }
                }}
                disabled={item.disabled}
                className={buttonClasses}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
