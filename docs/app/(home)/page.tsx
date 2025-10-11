import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Create stunning UIs
            <br />
            <span className="font-normal opacity-80">
              with glassmorphism effects
            </span>
          </h1>
          <p className="opacity-70 text-lg mb-8">
            A modern CSS components library for building beautiful, adaptive
            interfaces with smooth glass-like visuals and effortless theming.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Link
              href="/docs"
              className="px-6 py-2 rounded-full bg-neutral-900 text-white font-semibold shadow hover:bg-neutral-800 transition dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Getting Started
            </Link>
            <button
              type="button"
              disabled
              className="px-6 py-2 rounded-full bg-white/80 border border-neutral-300 text-neutral-400 font-semibold shadow opacity-60 cursor-not-allowed transition dark:bg-neutral-900/80 dark:text-neutral-500 dark:border-neutral-700"
            >
              Open Demo
            </button>
          </div>
        </div>
      </main>
      <footer className="w-full py-4 text-center text-xs opacity-60 border-t border-neutral-200 dark:border-neutral-800">
        Built by{" "}
        <a
          href="https://github.com/cilions"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          Deniz
        </a>{" "}
        with{" "}
        <a
          href="https://fumadocs.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          Fumadocs
        </a>
        . The source code is available on{" "}
        <a
          href="https://github.com/cilions/glasswave"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  );
}
