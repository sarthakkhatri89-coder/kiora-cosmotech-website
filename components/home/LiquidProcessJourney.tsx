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
import Image from "next/image";
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
    <section className="site-band-soft section-y">
      <div className="container-padded">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <HomeScrollReveal>
            <div className="lg:sticky lg:top-24">
              <p className="site-kicker">Manufacturing process</p>
              <h2 className="section-title mt-3 font-display font-semibold text-[rgba(50,36,45,0.96)]">
                The Kiora manufacturing journey
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[rgba(64,50,58,0.76)]">
                The process stays practical and transparent, from early product thinking to
                finished pack review and dispatch planning for skincare, derma-cosmetic, haircare
                and personal care ranges.
              </p>
              <div className="site-panel mt-8 overflow-hidden rounded-[2rem] p-4 sm:p-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/home/manufacturing-process-journey.webp"
                    alt="Cosmetic manufacturing process from formulation to filling and dispatch"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 36vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,40,48,0.06),rgba(58,40,48,0.2))]" />
                </div>
                <div className="mt-4 rounded-[1.35rem] border border-[rgba(59,43,51,0.08)] bg-white/78 p-4 shadow-[0_14px_32px_rgba(87,60,70,0.06)]">
                  <p className="site-kicker">Why this matters</p>
                  <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.74)]">
                    A clear process helps buyers align sampling, packaging, production timing and
                    dispatch expectations before the launch window gets compressed.
                  </p>
                </div>
              </div>
            </div>
          </HomeScrollReveal>

          <div className="home-process-timeline">
            {processSteps.map(({ title, text, icon: Icon }, index) => (
              <HomeScrollReveal delay={index * 55} key={title}>
                <article className="home-process-story-card">
                  <div className="flex items-start gap-4">
                    <div className="home-process-story-step">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3a2b35,#9a516b)] text-ivory shadow-[0_14px_28px_rgba(114,63,83,0.18)]">
                          <Icon size={18} aria-hidden="true" />
                        </div>
                        <h3 className="text-[1.2rem] font-semibold text-[rgba(52,38,46,0.94)]">
                          {title}
                        </h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[rgba(64,50,58,0.72)]">{text}</p>
                    </div>
                  </div>
                </article>
              </HomeScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
