export default function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal">{eyebrow}</p> : null}
      <h2 className="section-title font-display font-semibold text-charcoal">{title}</h2>
      {text ? <p className="mt-4 text-[1.05rem] leading-8 text-ink/75 md:text-xl">{text}</p> : null}
    </div>
  );
}
