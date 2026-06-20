const answers = [
  {
    question: "What is private label cosmetic manufacturing?",
    answer:
      "Private label cosmetic manufacturing lets a brand sell skincare, haircare or personal care products under its own brand name while a manufacturing partner supports formula selection, production, filling and packing."
  },
  {
    question: "What is third party cosmetic manufacturing?",
    answer:
      "Third party cosmetic manufacturing means outsourcing product manufacturing to a specialized partner so the brand can focus on sales, marketing, distribution and customer growth."
  },
  {
    question: "What is custom skincare formulation?",
    answer:
      "Custom skincare formulation develops a product around a brand's target texture, actives, packaging, sensory profile and positioning instead of using a standard ready formula."
  },
  {
    question: "How can I start my own skincare brand in India?",
    answer:
      "Start with a focused product range, decide ready or custom formulas, choose packaging, plan MOQ and pricing, approve samples, coordinate labels and then move into batch manufacturing."
  },
  {
    question: "What is MOQ in cosmetic manufacturing?",
    answer:
      "MOQ is the minimum order quantity needed for a practical production batch. It changes based on formula complexity, raw materials, packaging type, label work and batch planning."
  }
];

export default function AnswerBlocks() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {answers.map((item) => (
        <article className="site-panel rounded-[1.6rem] p-5" key={item.question}>
          <h3 className="text-base font-semibold leading-6 text-[rgba(52,38,46,0.94)]">{item.question}</h3>
          <p className="mt-3 text-sm leading-6 text-[rgba(64,50,58,0.72)]">{item.answer}</p>
        </article>
      ))}
    </div>
  );
}
