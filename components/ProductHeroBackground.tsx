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
  const caption = imageCaption ?? "Formula | Packaging | Filling | Quality | Dispatch";

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,238,231,0.82),transparent_24rem),radial-gradient(circle_at_top_right,rgba(164,188,174,0.22),transparent_26rem),radial-gradient(circle_at_80%_78%,rgba(214,103,132,0.14),transparent_22rem),linear-gradient(180deg,#fffaf6_0%,#f8efe6_100%)]">
      {imageSrc ? (
        <div aria-hidden="true" className="absolute inset-0">
          <div className={imageLayerClassName ?? "absolute inset-x-0 bottom-0 h-[38%] md:inset-y-0 md:left-[50%] md:h-auto"}>
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              fill
              priority
              className={imageClassName ?? "object-cover object-center md:object-[80%_center]"}
              sizes="(max-width: 768px) 100vw, 52vw"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,246,0.98)_0%,rgba(255,250,246,0.94)_32%,rgba(255,250,246,0.8)_56%,rgba(255,250,246,0.42)_100%)] md:bg-[linear-gradient(90deg,rgba(255,250,246,0.98)_0%,rgba(255,250,246,0.95)_34%,rgba(255,250,246,0.88)_48%,rgba(255,250,246,0.54)_68%,rgba(255,250,246,0.14)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.8),transparent_18%),radial-gradient(circle_at_86%_16%,rgba(164,188,174,0.16),transparent_18%),radial-gradient(circle_at_80%_82%,rgba(214,103,132,0.18),transparent_18%)]" />
        </div>
      ) : (
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(164,188,174,0.18),transparent_18%),radial-gradient(circle_at_80%_78%,rgba(214,103,132,0.14),transparent_20%)]" />
      )}

      <div className="container-padded relative z-10 grid gap-6 pt-12 pb-52 md:grid-cols-[1.02fr_0.98fr] md:items-end md:gap-10 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20">
        <div className="md:pr-8">
          {eyebrow ? <p className="site-kicker mb-4">{eyebrow}</p> : null}
          <h1 className={titleClassName ?? "max-w-[10ch] font-display text-[clamp(2.35rem,9vw,6rem)] font-semibold leading-[0.94] text-[rgba(49,35,43,0.96)]"}>
            {title}
          </h1>
          <div className="mt-5 max-w-3xl text-[1rem] leading-7 text-[rgba(64,50,58,0.78)] sm:text-[1.04rem] md:mt-6 md:text-[1.18rem] md:leading-8">
            {description}
          </div>
          {detail ? (
            <div className="mt-4 max-w-3xl text-[0.98rem] leading-7 text-[rgba(71,56,64,0.72)] md:mt-5 md:text-base md:leading-8">
              {detail}
            </div>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>
          {tags.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span className="site-chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {imageSrc ? (
          <div className="hidden min-h-[320px] md:block lg:min-h-[360px]" aria-hidden="true" />
        ) : (
          <div className="site-panel-soft hidden min-h-[320px] flex-col justify-end rounded-[2rem] p-8 md:flex lg:min-h-[360px]">
            <p className="site-kicker">Kiora CosmoTech</p>
            <h2 className="mt-3 text-[2rem] font-semibold leading-tight text-[rgba(50,36,45,0.94)]">
              {fallbackTitle ?? title}
            </h2>
            <p className="mt-3 max-w-[24rem] text-sm leading-7 text-[rgba(64,50,58,0.74)]">
              {fallbackDescription ?? "Private label and third-party manufacturing support for premium brand launches."}
            </p>
          </div>
        )}

        <div className="md:col-start-2 md:justify-self-end">
          {!imageSrc ? (
            <div className="site-panel-soft rounded-[1.5rem] p-5 md:hidden">
              <p className="site-kicker">Kiora CosmoTech</p>
              <h2 className="mt-3 text-[1.7rem] font-semibold leading-tight text-[rgba(50,36,45,0.94)]">
                {fallbackTitle ?? title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[rgba(64,50,58,0.74)]">
                {fallbackDescription ?? "Private label and third-party manufacturing support for premium brand launches."}
              </p>
            </div>
          ) : null}
          <div className="mt-4 inline-flex rounded-full border border-[rgba(59,43,51,0.08)] bg-white/84 px-4 py-2.5 text-sm font-medium text-[rgba(64,50,58,0.78)] shadow-sm backdrop-blur md:mt-0">
            {caption}
          </div>
        </div>
      </div>
    </section>
  );
}
