import Link from 'next/link';

const component = [
  'Alert',
  'Button',
  'Checkbox',
  'Dropdown',
  'Input',
  'Modal',
  'Radio',
  'Select',
  'Switch',
  'Textarea',
  'Toast',
  'Tooltip',
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-zinc-950 p-6 flex flex-col gap-6 border-r border-zinc-100 dark:border-zinc-900">
      <nav className="flex flex-col gap-4">
        <div className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 mb-2 mt-4 tracking-wide uppercase">
          Get started
        </div>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/installation"
              className="px-3 py-2 rounded transition-colors text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white">
              Installation
            </Link>
          </li>
        </ul>
        <div className="text-xs font-semibold text-zinc-400 dark:text-zinc-600 mb-2 mt-4 tracking-wide uppercase">
          Components
        </div>
        <ul className="flex flex-col gap-2">
          {component.map((name) => (
            <li key={name}>
              <Link
                href={`/components/${name.toLowerCase()}`}
                className="px-3 py-2 rounded transition-colors text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
