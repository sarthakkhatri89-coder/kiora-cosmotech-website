import { ClipboardCheck, Factory, FlaskConical, PackageCheck, Truck } from "lucide-react";

const stats = [
  { icon: FlaskConical, label: "Formula selection and custom formulation guidance" },
  { icon: Factory, label: "Batch planning, filling and packing support" },
  { icon: PackageCheck, label: "Packaging selection and label coordination" },
  { icon: ClipboardCheck, label: "Product specification and documentation inputs" },
  { icon: Truck, label: "Pan-India dispatch coordination" }
];

export default function TrustStats() {
  return (
    <section className="border-y border-charcoal/10 bg-ivory py-8">
      <div className="container-padded grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map(({ icon: Icon, label }) => (
          <div className="rounded-2xl bg-mist px-4 py-5 text-center text-sm font-semibold text-charcoal" key={label}>
            <Icon className="mx-auto mb-3 text-teal" size={22} aria-hidden="true" />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
