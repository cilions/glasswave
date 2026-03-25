"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const buttonGroupVariants = cva(
  "inline-flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:rounded-none first:[&>*]:rounded-l-full last:[&>*]:rounded-r-full",
  {
    variants: {
      orientation: {
        horizontal: "flex-row [&>*:not(:first-child)]:-ml-px",
        vertical:
          "flex-col first:[&>*]:rounded-t-full first:[&>*]:rounded-b-none first:[&>*]:rounded-l-full first:[&>*]:rounded-r-full last:[&>*]:rounded-b-full last:[&>*]:rounded-t-none last:[&>*]:rounded-l-full last:[&>*]:rounded-r-full [&>*:not(:first-child)]:-mt-px",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

export interface ButtonGroupProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof buttonGroupVariants> {
  role?: "group";
}

export function ButtonGroup({
  className,
  orientation,
  role = "group",
  ...props
}: ButtonGroupProps) {
  return (
    <div
      data-slot="button-group"
      role={role}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  );
}
