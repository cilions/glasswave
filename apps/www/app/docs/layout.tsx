import { Sidebar } from "@/components/docs/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 pl-[260px]">
        <div className="max-w-3xl mx-auto px-8 py-12">{children}</div>
      </main>
    </div>
  );
}
