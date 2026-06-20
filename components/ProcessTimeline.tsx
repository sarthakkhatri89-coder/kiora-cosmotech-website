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
        <div className="site-panel rounded-[1.6rem] p-5" key={step}>
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9a516b,#c88d92)] font-semibold text-ivory shadow-[0_14px_28px_rgba(154,81,107,0.22)]">
            {index + 1}
          </div>
          <h3 className="font-semibold text-[rgba(52,38,46,0.94)]">{step}</h3>
        </div>
      ))}
    </div>
  );
}
