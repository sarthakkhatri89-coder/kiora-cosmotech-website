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
      {eyebrow ? <p className="site-kicker mb-3">{eyebrow}</p> : null}
      <h2 className="section-title font-display font-semibold text-[rgba(50,36,45,0.96)]">{title}</h2>
      {text ? <p className="mt-4 text-[1.02rem] leading-8 text-[rgba(64,50,58,0.76)] md:text-[1.12rem]">{text}</p> : null}
    </div>
  );
}
