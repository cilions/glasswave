import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Link from "next/link";
import Sidebar from "./sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glasswave",
  description: "A CSS utility library for liquid-glass UI, refractions, and depth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-zinc-50 dark:bg-zinc-950`}>
        <header className="w-full h-16 flex items-center justify-between px-8 bg-white dark:bg-zinc-950">
            <Link href="/" className="font-medium text-lg tracking-tight hover:text-zinc-700 dark:hover:text-zinc-300">Glasswave</Link>
            <div className="relative">
          <input 
              type="text" 
              placeholder="Search..." 
              className="w-64 px-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 cursor-not-allowed opacity-50"
              disabled
          />
          <div className="absolute inset-0 bg-transparent cursor-not-allowed" />
            </div>
        </header>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8 max-w-4xl mx-auto">
            {children}
          </main>
        </div>
        <footer className="w-full h-16 flex items-center justify-center bg-white dark:bg-zinc-950">
          <span className="text-sm text-zinc-500">
            Built by <a href="https://github.com/cilions" className="underline hover:text-zinc-700 dark:hover:text-zinc-300">Deniz</a>. The source code is available on <a href="https://github.com/cilions/glasswave" className="underline hover:text-zinc-700 dark:hover:text-zinc-300">GitHub</a>.
          </span>
        </footer>
      </body>
    </html>
  );
}
