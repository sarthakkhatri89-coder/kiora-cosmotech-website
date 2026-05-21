import ContentPageRenderer from "@/components/ContentPageRenderer";
import { getContentPage } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const page = getContentPage("packaging-options")!;

export const metadata = createMetadata({ title: page.title, description: page.description, path: "/packaging-options" });

export default function Page() {
  return <ContentPageRenderer page={page} />;
}
