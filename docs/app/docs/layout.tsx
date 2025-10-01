// app/docs/layout.tsx
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { GitHubLogoIcon } from "@radix-ui/react-icons"; // либо свой SVG
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      links={[
        {
          type: "icon",
          icon: <GitHubLogoIcon />,
          text: "GitHub",
          url: "https://github.com/cilions/glasswave",
          external: true,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
