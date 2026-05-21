import ProductPageRenderer from "@/components/ProductPageRenderer";
import { productPages } from "@/data/products";
import { createMetadata } from "@/lib/seo";

const product = productPages.find((item) => item.slug === "face-serum-manufacturer")!;
export const metadata = createMetadata({ title: product.title, description: product.description, path: "/face-serum-manufacturer" });
export default function Page() { return <ProductPageRenderer product={product} />; }
