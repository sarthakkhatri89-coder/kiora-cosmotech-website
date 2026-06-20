import type { FAQ } from "@/data/faqs";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="site-panel mx-auto max-w-4xl divide-y divide-[rgba(59,43,51,0.08)] rounded-[1.9rem]">
      {faqs.map((faq) => (
        <details className="group p-5 open:bg-[rgba(255,241,236,0.54)] md:p-6" key={faq.question}>
          <summary className="cursor-pointer list-none font-semibold text-[rgba(52,38,46,0.94)] marker:hidden">
            <span className="flex items-center justify-between gap-4">
              {faq.question}
              <span className="text-2xl text-[rgba(148,84,109,0.92)] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </span>
          </summary>
          <p className="mt-4 leading-7 text-[rgba(64,50,58,0.76)]">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
