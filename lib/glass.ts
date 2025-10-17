export const glassBase =
  "backdrop-blur-[20px] bg-white/10 border border-white/20";

export const glassInteractive =
  "transition-all duration-200 hover:bg-white/20 active:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed";

export const rounded = "rounded-xl";

export const textOnGlass = "text-white";

export const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50";

export const glass = `${glassBase} ${rounded} ${textOnGlass}`;
