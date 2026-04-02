import { redirect } from "next/navigation";

// /docs → /docs/index
export default function DocsIndexPage() {
  redirect("/docs/index");
}
