"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../lib/cn";
import { glass, focusRing } from "../lib/glass";

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
          "relative w-full max-w-md p-6 animate-in fade-in-0 zoom-in-95",
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
  <div className={cn("flex flex-col gap-2 mb-4", className)} {...props} />
);

export const AlertDialogTitle = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<typeof Dialog.Title>) => (
  <Dialog.Title
    className={cn("text-xl font-semibold text-white", className)}
    {...props}
  />
);

export const AlertDialogDescription = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<typeof Dialog.Description>) => (
  <Dialog.Description className={cn("text-white/80", className)} {...props} />
);

export const AlertDialogFooter = ({
  className = "",
  ...props
}: { className?: string } & ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn("mt-6 flex items-center justify-end gap-3", className)}
    {...props}
  />
);

export const AlertDialogCancel = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<typeof Dialog.Close>) => (
  <Dialog.Close
    className={cn("text-white/80 hover:text-white", focusRing, className)}
    {...props}
  />
);

export const AlertDialogAction = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"button">) => (
  <button
    className={cn("text-white hover:opacity-80", focusRing, className)}
    {...props}
  />
);
