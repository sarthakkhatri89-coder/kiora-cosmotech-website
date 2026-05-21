import ContentPageRenderer from "@/components/ContentPageRenderer";
import { getContentPage } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const page = getContentPage("custom-skincare-formulation")!;

export const metadata = createMetadata({ title: page.title, description: page.description, path: "/custom-skincare-formulation" });

export default function Page() {
  return <ContentPageRenderer page={page} />;
}
