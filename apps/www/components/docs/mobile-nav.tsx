"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "glasswave";
import { SidebarContent } from "./sidebar";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-14 border-b border-slate-200 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-xl lg:hidden">
      <Link href="/" className="flex items-center gap-2">
        <div className="size-7 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/30 flex items-center justify-center">
          <span className="text-white text-xs font-bold">G</span>
        </div>
        <span className="font-semibold text-sm text-slate-900 dark:text-white tracking-tight">
          Glasswave UI
        </span>
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="secondary" size="icon" className="size-9">
            <Menu className="size-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 border-none bg-transparent">
          <div className="h-full w-full bg-white/80 dark:bg-black/80 backdrop-blur-2xl px-6 py-8 overflow-y-auto">
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>
            <SidebarContent onLinkClick={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
