import type { ReactNode } from "react";
import Image from "next/image";

type ProductHeroBackgroundProps = {
  eyebrow?: string;
  title: string;
  description: ReactNode;
  detail?: ReactNode;
  actions: ReactNode;
  tags?: string[];
  imageSrc?: string | null;
  imageAlt?: string;
  imageCaption?: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
  titleClassName?: string;
  imageLayerClassName?: string;
  imageClassName?: string;
};

export default function ProductHeroBackground({
  eyebrow,
  title,
  description,
  detail,
  actions,
  tags = [],
  imageSrc,
  imageAlt,
  imageCaption,
  fallbackTitle,
  fallbackDescription,
  titleClassName,
  imageLayerClassName,
  imageClassName
}: ProductHeroBackgroundProps) {
  const caption = imageCaption ?? "Formula • Packaging • Filling • Quality • Dispatch";

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(232,217,189,0.34),transparent_25rem),radial-gradient(circle_at_top_right,rgba(143,174,155,0.22),transparent_26rem),linear-gradient(180deg,#fffdf9_0%,#f7f1e7_100%)]">
      {imageSrc ? (
        <div aria-hidden="true" className="absolute inset-0">
          <div className={imageLayerClassName ?? "absolute inset-x-0 bottom-0 h-[36%] md:inset-y-0 md:left-[48%] md:h-auto"}>
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              fill
              priority
              className={imageClassName ?? "object-cover object-center md:object-right-center"}
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,249,0.98)_0%,rgba(255,253,249,0.95)_30%,rgba(255,253,249,0.82)_56%,rgba(255,253,249,0.42)_100%)] md:bg-[linear-gradient(90deg,rgba(255,253,249,0.98)_0%,rgba(255,253,249,0.96)_34%,rgba(255,253,249,0.88)_50%,rgba(255,253,249,0.58)_70%,rgba(255,253,249,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.8),transparent_18%),radial-gradient(circle_at_86%_16%,rgba(143,174,155,0.16),transparent_18%),radial-gradient(circle_at_80%_82%,rgba(232,217,189,0.36),transparent_18%)]" />
        </div>
      ) : (
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(143,174,155,0.18),transparent_18%),radial-gradient(circle_at_80%_78%,rgba(232,217,189,0.3),transparent_20%)]" />
      )}

      <div className="container-padded relative z-10 grid gap-6 pt-12 pb-52 md:grid-cols-[1.02fr_0.98fr] md:items-end md:gap-10 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20">
        <div className="md:pr-8">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal">{eyebrow}</p>
          ) : null}
          <h1 className={titleClassName ?? "max-w-[10ch] font-display text-[clamp(2.35rem,9vw,6rem)] font-semibold leading-[0.94] text-charcoal"}>
            {title}
          </h1>
          <div className="mt-5 max-w-3xl text-[1rem] leading-7 text-ink/78 sm:text-[1.04rem] md:mt-6 md:text-xl md:leading-8">
            {description}
          </div>
          {detail ? (
            <div className="mt-4 max-w-3xl text-[0.98rem] leading-7 text-ink/72 md:mt-5 md:text-base md:leading-8">
              {detail}
            </div>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>
          {tags.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  className="rounded-full border border-charcoal/8 bg-white/78 px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-ink/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)]"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {imageSrc ? (
          <div className="hidden min-h-[320px] md:block lg:min-h-[360px]" aria-hidden="true" />
        ) : (
          <div className="hidden md:flex min-h-[320px] flex-col justify-end rounded-[2rem] border border-charcoal/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(243,236,224,0.88))] p-8 shadow-[0_24px_60px_rgba(23,33,29,0.08)] lg:min-h-[360px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Kiora CosmoTech</p>
            <h2 className="mt-3 text-[2rem] font-semibold leading-tight text-charcoal">
              {fallbackTitle ?? title}
            </h2>
            <p className="mt-3 max-w-[24rem] text-sm leading-7 text-ink/74">
              {fallbackDescription ?? "Private label and third-party manufacturing support for premium brand launches."}
            </p>
          </div>
        )}

        <div className="md:col-start-2 md:justify-self-end">
          {!imageSrc ? (
            <div className="rounded-[1.5rem] border border-charcoal/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(243,236,224,0.88))] p-5 shadow-[0_18px_44px_rgba(23,33,29,0.08)] md:hidden">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Kiora CosmoTech</p>
              <h2 className="mt-3 text-[1.7rem] font-semibold leading-tight text-charcoal">
                {fallbackTitle ?? title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink/74">
                {fallbackDescription ?? "Private label and third-party manufacturing support for premium brand launches."}
              </p>
            </div>
          ) : null}
          <div className="mt-4 inline-flex rounded-full border border-charcoal/8 bg-white/84 px-4 py-2.5 text-sm font-medium text-ink/78 shadow-sm backdrop-blur md:mt-0">
            {caption}
          </div>
        </div>
      </div>
    </section>
  );
}
