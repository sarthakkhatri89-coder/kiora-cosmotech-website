import ContentPageRenderer from "@/components/ContentPageRenderer";
import { getContentPage } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const page = getContentPage("startup-cosmetic-brand-support")!;

export const metadata = createMetadata({ title: page.title, description: page.description, path: "/startup-cosmetic-brand-support" });

export default function Page() {
  return <ContentPageRenderer page={page} />;
}
