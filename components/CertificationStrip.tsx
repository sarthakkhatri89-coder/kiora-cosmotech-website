import { ClipboardCheck, FileCheck2, PackageCheck, SearchCheck } from "lucide-react";

const items = [
  { icon: ClipboardCheck, label: "Batch documentation support" },
  { icon: SearchCheck, label: "Raw material and in-process checks" },
  { icon: FileCheck2, label: "Product specification inputs" },
  { icon: PackageCheck, label: "Finished product review" }
];

export default function CertificationStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map(({ icon: Icon, label }) => (
        <div className="rounded-3xl border border-charcoal/10 bg-ivory p-5 shadow-sm" key={label}>
          <Icon className="mb-4 text-teal" size={28} aria-hidden="true" />
          <p className="font-semibold text-charcoal">{label}</p>
        </div>
      ))}
    </div>
  );
}
