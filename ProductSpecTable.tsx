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
    <div className="overflow-hidden rounded-3xl border border-charcoal/10 bg-ivory shadow-sm">
      <table className="w-full text-left text-sm">
        <tbody>
          {rows.map(([label, value]) => (
            <tr className="border-b border-charcoal/10 last:border-b-0" key={label}>
              <th className="w-40 bg-mist px-4 py-4 align-top font-semibold text-charcoal md:w-64 md:px-6">{label}</th>
              <td className="px-4 py-4 leading-7 text-ink/78 md:px-6">
                {label === "CTA" ? (
                  <a className="font-semibold text-teal underline-offset-4 hover:underline" href={whatsappHref(`Hello Kiora CosmoTech, I want a quote for ${product.name}.`)}>
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
