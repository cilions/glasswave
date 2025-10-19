export const glassBase =
  "backdrop-blur-[40px] backdrop-saturate-[180%] bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] dark:from-white/[0.15] dark:via-white/[0.10] dark:to-white/[0.05] border border-white/[0.18] dark:border-white/[0.25] shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]";

export const glassInteractive =
  "transition-all duration-[400ms] ease-out hover:backdrop-blur-[60px] hover:bg-gradient-to-br hover:from-white/[0.12] hover:via-white/[0.08] hover:to-white/[0.04] dark:hover:from-white/[0.22] dark:hover:via-white/[0.16] dark:hover:to-white/[0.10] hover:border-white/[0.25] dark:hover:border-white/[0.35] hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.15)] dark:hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.4)] hover:scale-[1.01] active:scale-[0.99] active:backdrop-blur-[50px] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100";

export const rounded = "rounded-[20px]";

export const textOnGlass = "text-gray-900/90 dark:text-white/95 font-medium";

export const focusRing =
  "focus:outline-none focus-visible:ring-[3px] focus-visible:ring-blue-500/40 dark:focus-visible:ring-blue-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

export const glassGlow =
  "before:absolute before:inset-0 before:rounded-[20px] before:bg-gradient-to-br before:from-white/[0.15] before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500";

export const glass = `${glassBase} ${rounded} ${textOnGlass} relative overflow-hidden`;

export const glassPremium = `${glass} ${glassGlow}`;

export const glassAnimated = `${glass} after:absolute after:inset-[-1px] after:rounded-[20px] after:bg-gradient-to-r after:from-transparent after:via-white/[0.3] after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-700 after:blur-sm after:-z-10`;