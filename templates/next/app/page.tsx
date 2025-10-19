"use client";

import { Alert, AlertTitle, AlertDescription } from "glasswave";
import { Button } from "glasswave";
import { Checkbox } from "glasswave";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "glasswave";
import { Input } from "glasswave";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "glasswave";
import { RadioGroup, RadioGroupItem } from "glasswave";
import { Select } from "glasswave";
import { Switch } from "glasswave";
import { Textarea } from "glasswave";
import { Toast } from "glasswave";
import { Tooltip } from "glasswave";
import { Code2, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-100 to-slate-100 dark:from-slate-900 dark:via-stone-900 dark:to-slate-900 relative overflow-hidden transition-colors duration-500">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-300/20 dark:bg-slate-600/15 rounded-full blur-[120px] animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-300/20 dark:bg-stone-600/15 rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Header */}
        <header className="relative z-10 pt-20 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                Glasswave
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-8">
                A component-based UI library for React with a liquid glass
                effect.
              </p>

              <a
                href="https://glasswave-ui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <Button size="lg" className="flex items-center">
                  <Code2 className="w-4 h-4 mr-2" />
                  Documentation
                </Button>
              </a>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
          <div className="grid gap-6">
            {/* Buttons */}
            <section className="backdrop-blur-[40px] backdrop-saturate-[180%] bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] dark:from-white/[0.15] dark:via-white/[0.10] dark:to-white/[0.05] border border-white/[0.18] dark:border-white/[0.25] rounded-[24px] p-8">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">
                Buttons
              </h2>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button disabled>Disabled</Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" aria-label="Icon">
                    <CheckCircle2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </section>

            {/* Inputs */}
            <section className="backdrop-blur-[40px] backdrop-saturate-[180%] bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] dark:from-white/[0.15] dark:via-white/[0.10] dark:to-white/[0.05] border border-white/[0.18] dark:border-white/[0.25] rounded-[24px] p-8">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">
                Form Controls
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input placeholder="Email" type="email" />
                  <Input type="password" placeholder="Password" />
                  <Textarea placeholder="Your message..." rows={3} />
                  <Select />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-slate-600 dark:text-slate-300 text-sm"
                    >
                      Accept terms
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <Switch id="notifications" />
                    <label
                      htmlFor="notifications"
                      className="text-slate-600 dark:text-slate-300 text-sm"
                    >
                      Enable notifications
                    </label>
                  </div>

                  <RadioGroup defaultValue="one" className="space-y-3">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="one" id="one" />
                      <label
                        htmlFor="one"
                        className="text-slate-600 dark:text-slate-300 text-sm"
                      >
                        Option one
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="two" id="two" />
                      <label
                        htmlFor="two"
                        className="text-slate-600 dark:text-slate-300 text-sm"
                      >
                        Option two
                      </label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </section>

            {/* Alerts & Dialogs */}
            <div className="grid md:grid-cols-2 gap-6">
              <section className="backdrop-blur-[40px] backdrop-saturate-[180%] bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] dark:from-white/[0.15] dark:via-white/[0.10] dark:to-white/[0.05] border border-white/[0.18] dark:border-white/[0.25] rounded-[24px] p-8">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">
                  Alerts & Toast
                </h2>

                <div className="space-y-4">
                  <Alert className="backdrop-blur-xl bg-green-500/10 border-green-500/30">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <AlertTitle className="text-green-800 dark:text-green-200">
                      Success
                    </AlertTitle>
                    <AlertDescription className="text-green-700 dark:text-green-300">
                      Your changes have been saved
                    </AlertDescription>
                  </Alert>

                  <Toast message="Notification sent!" type="success" />
                </div>
              </section>

              <section className="backdrop-blur-[40px] backdrop-saturate-[180%] bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] dark:from-white/[0.15] dark:via-white/[0.10] dark:to-white/[0.05] border border-white/[0.18] dark:border-white/[0.25] rounded-[24px] p-8">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">
                  Dialogs & Menus
                </h2>

                <div className="flex flex-wrap gap-3">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button>Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Tooltip content="This is a tooltip">
                    <Button variant="outline">Tooltip</Button>
                  </Tooltip>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 w-full py-4 text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
          Built by{" "}
          <a
            href="https://github.com/cilions"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-700 dark:hover:text-slate-300"
          >
            Deniz
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/cilions/glasswave"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-700 dark:hover:text-slate-300"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
