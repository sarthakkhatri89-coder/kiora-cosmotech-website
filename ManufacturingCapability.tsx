import { Beaker, Boxes, Factory, Package } from "lucide-react";

const capabilities = [
  { icon: Beaker, title: "Formula Guidance", text: "Ready and custom formulation pathways for skincare-focused brands." },
  { icon: Factory, title: "Manufacturing Support", text: "Batch planning, filling, packing and dispatch coordination." },
  { icon: Package, title: "Packaging Selection", text: "Tubes, jars, bottles, pumps, droppers, labels and cartons." },
  { icon: Boxes, title: "Range Planning", text: "Skincare, derma-cosmetic, haircare and personal care product lines." }
];

export default function ManufacturingCapability() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {capabilities.map(({ icon: Icon, title, text }) => (
        <div className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm" key={title}>
          <Icon className="mb-5 text-teal" size={30} aria-hidden="true" />
          <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
          <p className="mt-3 leading-7 text-ink/72">{text}</p>
        </div>
      ))}
    </div>
  );
}
