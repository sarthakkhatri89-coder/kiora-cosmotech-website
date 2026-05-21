import ContentPageRenderer from "@/components/ContentPageRenderer";
import { getContentPage } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const page = getContentPage("quality-and-compliance")!;

export const metadata = createMetadata({ title: page.title, description: page.description, path: "/quality-and-compliance" });

export default function Page() {
  return <ContentPageRenderer page={page} />;
}
