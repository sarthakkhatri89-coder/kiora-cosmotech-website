import ContentPageRenderer from "@/components/ContentPageRenderer";
import { getContentPage } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const page = getContentPage("third-party-cosmetic-manufacturing-india")!;

export const metadata = createMetadata({ title: page.title, description: page.description, path: "/third-party-cosmetic-manufacturing-india" });

export default function Page() {
  return <ContentPageRenderer page={page} />;
}
