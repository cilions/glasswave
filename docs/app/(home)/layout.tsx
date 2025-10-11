// app/home/layout.tsx
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
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
    </HomeLayout>
  );
}
