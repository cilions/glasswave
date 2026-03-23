"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function NavigationMenuPreview() {
  return (
    <ComponentPreview label="Navigation Menu">
      <NavigationMenu className="max-w-full">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Product</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[240px] gap-2 p-2">
                <li>
                  <NavigationMenuLink className="block rounded-xl px-3 py-2 hover:bg-white/10" href="#">
                    Overview
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink className="block rounded-xl px-3 py-2 hover:bg-white/10" href="#">
                    Pricing
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="inline-flex h-10 items-center rounded-full px-4 text-sm font-medium hover:bg-white/10" href="#">
              Docs
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </ComponentPreview>
  );
}
