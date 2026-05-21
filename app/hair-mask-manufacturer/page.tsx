import ProductPageRenderer from "@/components/ProductPageRenderer";
import { productPages } from "@/data/products";
import { createMetadata } from "@/lib/seo";

const product = productPages.find((item) => item.slug === "hair-mask-manufacturer")!;
export const metadata = createMetadata({ title: product.title, description: product.description, path: "/hair-mask-manufacturer" });
export default function Page() { return <ProductPageRenderer product={product} />; }
