import ContentPageRenderer from "@/components/ContentPageRenderer";
import { getContentPage } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const page = getContentPage("haircare-manufacturer-india")!;

export const metadata = createMetadata({ title: page.title, description: page.description, path: "/haircare-manufacturer-india" });

export default function Page() {
  return <ContentPageRenderer page={page} />;
}
