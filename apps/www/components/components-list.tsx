import { nav } from "@/lib/nav";

export function ComponentsList() {
  const componentsSection = nav.find((s) => s.title === "Components");
  const items = componentsSection?.items ?? [];

  const third = Math.ceil(items.length / 3);
  const columns = [
    items.slice(0, third),
    items.slice(third, third * 2),
    items.slice(third * 2),
  ];

  return (
    <div className="grid grid-cols-3 gap-8 mt-6">
      {columns.map((col, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          {col.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-lg text-slate-600 dark:text-white/60 no-underline transition-colors hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5"
            >
              {item.title}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
