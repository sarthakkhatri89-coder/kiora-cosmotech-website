const defaultSteps = [
  "Product idea discussion",
  "Formula selection or development",
  "Packaging selection",
  "Sampling",
  "Quote approval",
  "Artwork and label coordination",
  "Manufacturing",
  "Filling and packing",
  "Quality check",
  "Dispatch"
];

export default function ProcessTimeline({ steps = defaultSteps }: { steps?: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <div className="rounded-3xl border border-charcoal/10 bg-ivory p-5 shadow-sm" key={step}>
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-teal font-semibold text-ivory">{index + 1}</div>
          <h3 className="font-semibold text-charcoal">{step}</h3>
        </div>
      ))}
    </div>
  );
}
