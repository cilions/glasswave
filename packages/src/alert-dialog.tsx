"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/cn";
import { glass } from "@/lib/glass";
import { buttonVariants } from "./button";

export const AlertDialog = Dialog.Root;
export const AlertDialogTrigger = Dialog.Trigger;
export const AlertDialogPortal = Dialog.Portal;
export const AlertDialogClose = Dialog.Close;

export const AlertDialogContent = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => (
  <AlertDialogPortal>
    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <Dialog.Content
        ref={ref}
        className={cn(
          glass,
          "bg-white dark:bg-zinc-950",
          "relative w-full max-w-[350px] animate-in fade-in-0 zoom-in-95 overflow-hidden",
          className,
        )}
        {...props}
      >
        {children}
      </Dialog.Content>
    </div>
  </AlertDialogPortal>
));
AlertDialogContent.displayName = "AlertDialogContent";

export const AlertDialogHeader = ({
  className = "",
  ...props
}: { className?: string } & ComponentPropsWithoutRef<"div">) => (
  <div className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />
);

export const AlertDialogTitle = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<typeof Dialog.Title>) => (
  <Dialog.Title
    className={cn("!m-0 text-xl font-semibold", className)}
    {...props}
  />
);

export const AlertDialogDescription = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<typeof Dialog.Description>) => (
  <Dialog.Description className={cn("!m-0 text-sm opacity-70", className)} {...props} />
);

export const AlertDialogFooter = ({
  className = "",
  ...props
}: { className?: string } & ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn("flex items-center p-6 pt-0 gap-4", className)}
    {...props}
  />
);

export const AlertDialogCancel = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<typeof Dialog.Close>) => (
  <Dialog.Close
    className={cn(buttonVariants({ variant: "secondary" }), "flex-1 cursor-pointer", className)}
    {...props}
  />
);

export const AlertDialogAction = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"button">) => (
  <button
    className={cn(buttonVariants({ variant: "default" }), "flex-1 cursor-pointer", className)}
    {...props}
  />
);
