import ContentPageRenderer from "@/components/ContentPageRenderer";
import { getContentPage } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const page = getContentPage("manufacturing-process")!;

export const metadata = createMetadata({ title: page.title, description: page.description, path: "/manufacturing-process" });

export default function Page() {
  return <ContentPageRenderer page={page} />;
}
