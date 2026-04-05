import { Sidebar } from "@/components/docs/sidebar";
import { MobileNav } from "@/components/docs/mobile-nav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <MobileNav />
      <Sidebar />
      <main className="flex-1 lg:pl-[260px] pt-14 lg:pt-0">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">{children}</div>
      </main>
    </div>
  );
}
