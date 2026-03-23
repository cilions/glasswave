"use client";

import "react-day-picker/style.css";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { cn } from "@/lib/cn";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const defaults = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-2", className)}
      classNames={{
        ...defaults,
        root: cn(
          defaults.root,
          "w-fit rounded-[32px] border border-white/[0.18] bg-white/[0.04] shadow-sm dark:border-white/[0.25] dark:bg-white/[0.06]",
        ),
        months: cn(defaults.months, "flex flex-col gap-3 sm:flex-row"),
        month: cn(defaults.month, "flex flex-col gap-3"),
        month_caption: cn(defaults.month_caption, "flex items-center justify-center px-1"),
        caption_label: cn(defaults.caption_label, "text-sm font-semibold"),
        nav: cn(defaults.nav, "flex items-center gap-1"),
        button_previous: cn(
          defaults.button_previous,
          "inline-flex size-8 items-center justify-center rounded-full hover:bg-white/10",
        ),
        button_next: cn(
          defaults.button_next,
          "inline-flex size-8 items-center justify-center rounded-full hover:bg-white/10",
        ),
        weekdays: cn(defaults.weekdays, "flex"),
        weekday: cn(defaults.weekday, "w-9 text-[0.8rem] font-normal text-current/55"),
        week: cn(defaults.week, "mt-1 flex w-full"),
        day: cn(defaults.day, "size-9 p-0 text-center text-sm"),
        day_button: cn(
          defaults.day_button,
          "size-9 rounded-lg p-0 font-normal hover:bg-white/12 aria-selected:opacity-100",
        ),
        selected: cn(
          defaults.selected,
          "rounded-lg bg-[#007AFF] text-white hover:bg-[#007AFF] hover:text-white focus:bg-[#007AFF] focus:text-white",
        ),
        today: cn(defaults.today, "bg-white/10 text-current"),
        outside: cn(defaults.outside, "text-current/35 aria-selected:text-current/35"),
        disabled: cn(defaults.disabled, "text-current/30"),
        hidden: cn(defaults.hidden, "invisible"),
        ...classNames,
      }}
      {...props}
    />
  );
}
