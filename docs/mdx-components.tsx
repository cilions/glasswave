import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  h1: (props) => (
    <h1 className="text-3xl font-bold mb-6 mt-2 text-zinc-900 dark:text-zinc-100" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-semibold mb-4 mt-6 text-zinc-800 dark:text-zinc-200" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold mb-3 mt-5 text-zinc-700 dark:text-zinc-300" {...props} />
  ),
  p: (props) => <p className="mb-4 text-zinc-700 dark:text-zinc-300" {...props} />,
  ul: (props) => <ul className="list-disc ml-6 mb-4" {...props} />,
  ol: (props) => <ol className="list-decimal ml-6 mb-4" {...props} />,
  li: (props) => <li className="mb-1" {...props} />,
  code: (props) => (
    <code
      className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono"
      {...props}
    />
  ),
  pre: (props) => (
    <pre className="p-4 rounded bg-zinc-100 dark:bg-zinc-900 overflow-x-auto mb-4" {...props} />
  ),
  a: (props) => (
    <a
      className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
