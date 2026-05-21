"use client";

const categories = ["Skincare", "Derma Cosmetic", "Haircare", "Personal Care"];
const formulaTypes = ["Ready formula", "Custom formula", "Need guidance"];

export default function QuoteForm() {
  return (
    <form className="grid gap-4 rounded-3xl border border-charcoal/10 bg-ivory p-5 shadow-premium md:grid-cols-2 md:p-8">
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Name
        <input required className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="name" autoComplete="name" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Company name
        <input className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="company" autoComplete="organization" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Mobile
        <input required className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="mobile" autoComplete="tel" inputMode="tel" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Email
        <input required className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="email" autoComplete="email" type="email" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Product category
        <select className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="category">
          {categories.map((category) => <option key={category}>{category}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Product type
        <input className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="productType" placeholder="Face serum, sunscreen, shampoo..." />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Required quantity
        <input className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="quantity" placeholder="500 / 1000 / 2000 pcs" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Packaging requirement
        <input className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="packaging" placeholder="Tube, jar, dropper, pump..." />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Ready formula or custom formula
        <select className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="formula">
          {formulaTypes.map((type) => <option key={type}>{type}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        City
        <input className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="city" autoComplete="address-level2" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal md:col-span-2">
        Message
        <textarea className="focus-ring min-h-32 rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="message" />
      </label>
      <button className="focus-ring rounded-full bg-teal px-6 py-3 font-semibold text-ivory transition hover:bg-charcoal md:col-span-2" type="submit">
        Request Manufacturing Quote
      </button>
    </form>
  );
}
