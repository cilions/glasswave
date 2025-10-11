"use client";

import { forwardRef } from "react";

interface RadioProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  id?: string;
  className?: string;
  disabled?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { name, value, checked, onChange, id, className = "", disabled, ...props },
    ref,
  ) => {
    const baseClasses =
      "backdrop-blur-[20px] bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer focus-within:ring-2 focus-within:ring-white/30 w-5 h-5 rounded-full flex items-center justify-center";
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
      <div className="relative">
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="sr-only"
          {...props}
        />
        <label
          htmlFor={id}
          className={`${baseClasses} ${disabledClasses} ${className}`}
        >
          {checked && <div className="w-2 h-2 bg-white rounded-full" />}
        </label>
      </div>
    );
  },
);

Radio.displayName = "Radio";
