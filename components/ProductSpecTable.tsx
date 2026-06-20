import type { ProductPage } from "@/data/products";
import { whatsappHref } from "@/data/siteConfig";

export default function ProductSpecTable({ product }: { product: ProductPage }) {
  const rows = [
    ["Service Type", "Private Label / Third Party / Contract Manufacturing"],
    ["Product Type", product.name.replace(" Manufacturer", "")],
    ["Formula Options", product.formulaOptions.join(", ")],
    ["Packaging Options", product.packagingOptions],
    ["MOQ", product.moq],
    ["Customization", product.customization],
    ["Documentation Support", product.documentation],
    ["Suitable For", product.suitableFor],
    ["CTA", "Get Quote on WhatsApp"]
  ];

  return (
    <div className="site-panel overflow-hidden rounded-[1.9rem]">
      <table className="w-full text-left text-sm">
        <tbody>
          {rows.map(([label, value]) => (
            <tr className="border-b border-[rgba(59,43,51,0.08)] last:border-b-0" key={label}>
              <th className="w-40 bg-[rgba(255,241,236,0.72)] px-4 py-4 align-top font-semibold text-[rgba(52,38,46,0.94)] md:w-64 md:px-6">{label}</th>
              <td className="px-4 py-4 leading-7 text-[rgba(64,50,58,0.78)] md:px-6">
                {label === "CTA" ? (
                  <a className="font-semibold text-[rgba(148,84,109,0.92)] underline-offset-4 hover:underline" href={whatsappHref(`Hello Kiora CosmoTech, I want a quote for ${product.name}.`)}>
                    {value}
                  </a>
                ) : (
                  value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
