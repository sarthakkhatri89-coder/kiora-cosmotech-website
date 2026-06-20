import ContentPageRenderer from "@/components/ContentPageRenderer";
import { getContentPage } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const page = getContentPage("terms-and-conditions")!;

export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: "/terms-and-conditions"
});

export default function Page() {
  return <ContentPageRenderer page={page} />;
}
