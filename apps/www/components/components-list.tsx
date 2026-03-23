import meta from "@/content/docs/meta.json";

export function ComponentsList() {
  const componentPages = meta.pages.filter(
    (page) => typeof page === "string" && page.includes("components/") && !page.includes("_components/")
  );

  const components = componentPages.map((page) => {
    const name = (page as string)
      .replace(/^components\//, "")
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      name,
      path: (page as string),
    };
  });

  // Split into 3 columns
  const itemsPerColumn = Math.ceil(components.length / 3);
  const columns = [
    components.slice(0, itemsPerColumn),
    components.slice(itemsPerColumn, itemsPerColumn * 2),
    components.slice(itemsPerColumn * 2),
  ];

  return (
    <div className="grid grid-cols-3 gap-8 mt-6">
      {columns.map((column, idx) => (
        <div key={idx} className="flex flex-col gap-3">
          {column.map((component) => (
            <a
              key={component.path}
              href={`/docs/${component.path}`}
              className="px-3 py-2 rounded-lg text-gray-900 dark:text-white no-underline transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {component.name}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
