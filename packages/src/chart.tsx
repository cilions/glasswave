"use client";

import type { CSSProperties, ReactElement, ReactNode } from "react";
import { ResponsiveContainer } from "recharts";
import { cn } from "@/lib/cn";

export type ChartConfig = Record<
  string,
  {
    label?: ReactNode;
    color?: string;
  }
>;

export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactNode;
}) {
  const style = {
    ...Object.fromEntries(
      Object.entries(config).map(([key, item]) => [`--color-${key}`, item.color ?? "var(--fd-primary, #007AFF)"]),
    ),
  } as CSSProperties;

  return (
    <div
      data-slot="chart"
      data-chart={id}
      className={cn(
        "glass flex aspect-video justify-center rounded-[32px] p-4 text-xs",
        "[&_.recharts-cartesian-axis-tick_text]:fill-current/55 [&_.recharts-text]:fill-current",
        className,
      )}
      style={style}
      {...props}
    >
      <ResponsiveContainer width="100%" height="100%">
        {children as ReactElement}
      </ResponsiveContainer>
    </div>
  );
}

export {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export { ResponsiveContainer } from "recharts";
