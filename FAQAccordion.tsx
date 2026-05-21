import type { FAQ } from "@/data/faqs";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="mx-auto max-w-4xl divide-y divide-charcoal/10 rounded-3xl border border-charcoal/10 bg-ivory shadow-sm">
      {faqs.map((faq) => (
        <details className="group p-5 open:bg-mist/60 md:p-6" key={faq.question}>
          <summary className="cursor-pointer list-none font-semibold text-charcoal marker:hidden">
            <span className="flex items-center justify-between gap-4">
              {faq.question}
              <span className="text-2xl text-teal group-open:rotate-45" aria-hidden="true">+</span>
            </span>
          </summary>
          <p className="mt-4 leading-7 text-ink/75">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
