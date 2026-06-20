"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig, whatsappHref } from "@/data/siteConfig";

const categories = ["Skincare", "Derma Cosmetic", "Haircare", "Personal Care"];
const formulaTypes = ["Ready formula", "Custom formula", "Need guidance"];
const brandStages = ["Startup", "Existing brand", "Salon", "Clinic", "Influencer", "Distributor", "Export enquiry"];
const contactMethods = ["WhatsApp", "Call", "Email"];
const yesNo = ["Yes", "No"];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="grid gap-4 rounded-3xl border border-charcoal/10 bg-ivory p-5 shadow-premium md:grid-cols-2 md:p-8" onSubmit={handleSubmit}>
      <div className="md:col-span-2">
        <p className="text-sm leading-7 text-ink/72">
          Share your product category, expected quantity, packaging preference and target launch plan. This helps us guide you with practical manufacturing, MOQ and product development direction.
        </p>
      </div>
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
        Brand stage
        <select className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="brandStage" defaultValue="Startup">
          {brandStages.map((stage) => <option key={stage}>{stage}</option>)}
        </select>
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
        Expected MOQ
        <input className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="expectedMoq" placeholder="Approximate batch size or target MOQ" />
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
        Need packaging support
        <select className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="needPackagingSupport" defaultValue="Yes">
          {yesNo.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Need custom formulation
        <select className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="needCustomFormulation" defaultValue="No">
          {yesNo.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Target launch city
        <input className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="city" autoComplete="address-level2" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Launch timeline
        <input className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="timeline" placeholder="30 days, 60 days, 90 days..." />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Preferred contact method
        <select className="focus-ring rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="preferredContactMethod" defaultValue="WhatsApp">
          {contactMethods.map((method) => <option key={method}>{method}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal md:col-span-2">
        Message
        <textarea className="focus-ring min-h-32 rounded-2xl border border-charcoal/15 bg-white px-4 py-3 font-normal" name="message" />
      </label>
      <button className="focus-ring rounded-full bg-teal px-6 py-3 font-semibold text-ivory transition hover:bg-charcoal md:col-span-2" type="submit">
        Request Manufacturing Quote
      </button>
      {submitted ? (
        <div className="rounded-3xl bg-mist p-5 text-sm leading-7 text-ink/78 md:col-span-2">
          <p className="font-semibold text-charcoal">Thank you. Your manufacturing requirement has been recorded. Our team will contact you shortly.</p>
          <p className="mt-2">
            For faster response, share your product type, quantity, packaging preference and city on WhatsApp.
          </p>
        </div>
      ) : null}
      <div className="rounded-3xl border border-charcoal/10 bg-mist p-5 text-sm leading-7 text-ink/74 md:col-span-2">
        <p className="font-semibold text-charcoal">WhatsApp fallback</p>
        <p className="mt-2">
          If you prefer a faster discussion, share your product category, expected quantity, packaging preference and launch city on WhatsApp or call us directly.
        </p>
        <p className="mt-3 text-xs leading-6 text-ink/62">
          By sharing your enquiry, you agree to be contacted regarding your manufacturing requirement. Read our{" "}
          <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/privacy-policy">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/terms-and-conditions">
            Terms &amp; Conditions
          </Link>.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="focus-ring inline-flex items-center rounded-full bg-charcoal px-5 py-3 font-semibold text-ivory transition hover:bg-teal" href={whatsappHref("Hello Kiora CosmoTech, I want to discuss a cosmetic manufacturing requirement.")}>
            Start Private Label Discussion
          </a>
          <a className="focus-ring inline-flex items-center rounded-full border border-charcoal/15 px-5 py-3 font-semibold text-charcoal transition hover:bg-ivory" href={`tel:${siteConfig.phone}`}>
            Discuss My Product Idea
          </a>
          <Link className="focus-ring inline-flex items-center rounded-full border border-charcoal/15 px-5 py-3 font-semibold text-charcoal transition hover:bg-ivory" href="/private-label-cosmetics-manufacturer-india">
            Explore Private Label Options
          </Link>
        </div>
      </div>
    </form>
  );
}
