import {
  Beaker,
  ClipboardList,
  Factory,
  FlaskConical,
  PackageCheck,
  ShoppingBag,
  Sparkles,
  Truck
} from "lucide-react";
import HomeScrollReveal from "@/components/home/HomeScrollReveal";

const processSteps = [
  {
    title: "Product idea discussion",
    text: "Define the category, customer profile, launch goals and product brief before development starts.",
    icon: Sparkles
  },
  {
    title: "Formula direction",
    text: "Align ingredient story, sensorial direction and cosmetic positioning around the intended market.",
    icon: FlaskConical
  },
  {
    title: "Packaging planning",
    text: "Review tubes, jars, bottles, pumps and outer pack requirements for presentation and use.",
    icon: PackageCheck
  },
  {
    title: "Sampling",
    text: "Shortlist samples, discuss refinements and confirm the practical direction for launch.",
    icon: Beaker
  },
  {
    title: "RM/PM planning",
    text: "Coordinate raw material and packing material planning against quantity and expected timeline.",
    icon: ClipboardList
  },
  {
    title: "Manufacturing",
    text: "Move into planned batch execution with manufacturing steps aligned to the approved direction.",
    icon: Factory
  },
  {
    title: "Filling and packing",
    text: "Fill, label and pack finished units into a market-ready presentation for dispatch preparation.",
    icon: ShoppingBag
  },
  {
    title: "Quality review and dispatch",
    text: "Review finished goods and align dispatch timing for the next stage of your launch plan.",
    icon: Truck
  }
];

export default function LiquidProcessJourney() {
  return (
    <section className="section-y bg-mist">
      <div className="container-padded">
        <HomeScrollReveal className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
            Manufacturing process
          </p>
          <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
            The Kiora Manufacturing Journey
          </h2>
          <p className="mt-5 text-[1rem] leading-8 text-ink/74">
            The process stays practical and transparent, from early product thinking to finished pack
            review and dispatch planning for skincare, derma-cosmetic, haircare and personal care
            ranges.
          </p>
        </HomeScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map(({ title, text, icon: Icon }, index) => (
            <HomeScrollReveal delay={index * 55} key={title}>
              <article className="rounded-[1.8rem] border border-charcoal/8 bg-white/78 p-5 shadow-[0_20px_48px_rgba(23,33,29,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(23,33,29,0.09)]">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-charcoal text-ivory shadow-sm">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/48">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-charcoal">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/72">{text}</p>
              </article>
            </HomeScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
