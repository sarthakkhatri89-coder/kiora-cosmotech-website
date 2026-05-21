"use client";

import Link from "next/link";
import { MessageCircle, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { siteConfig, whatsappHref } from "@/data/siteConfig";

export default function Header() {
  const [open, setOpen] = useState(false);
  const desktopNav = navigation.filter((item) => item.label !== "Request Quote");

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/96 shadow-[0_10px_30px_rgba(23,32,31,0.06)] backdrop-blur-xl">
      <div className="container-padded flex min-h-[76px] items-center justify-between gap-4">
        <Link className="focus-ring flex items-center gap-3 rounded-sm" href="/" aria-label="Kiora CosmoTech home">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-charcoal font-display text-xl font-semibold text-champagne">K</span>
          <span>
            <span className="block font-display text-[1.55rem] font-semibold leading-none text-charcoal">Kiora CosmoTech</span>
            <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-teal">Cosmetic Manufacturing</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
          {desktopNav.map((item) => (
            <div className="group relative" key={item.href}>
              <Link className="focus-ring rounded-full px-3 py-2 text-sm font-semibold text-charcoal hover:bg-mist" href={item.href}>
                {item.label === "Quality & Compliance" ? "Quality" : item.label}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full z-50 grid w-72 translate-y-2 gap-1 rounded-3xl border border-charcoal/10 bg-ivory p-3 opacity-0 shadow-premium transition group-hover:visible group-hover:translate-y-4 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link className="focus-ring rounded-2xl px-4 py-3 text-sm font-semibold text-ink hover:bg-mist hover:text-teal" href={child.href} key={child.href}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <a className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 text-teal transition hover:bg-mist" href={whatsappHref()} aria-label="Chat with Kiora CosmoTech on WhatsApp">
            <MessageCircle size={18} aria-hidden="true" />
          </a>
          <a className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 text-teal transition hover:bg-mist" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} aria-label="Call Kiora CosmoTech">
            <Phone size={17} aria-hidden="true" />
          </a>
          <Link className="focus-ring rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-ivory shadow-sm transition hover:bg-teal" href="/request-quote">
            Request Quote
          </Link>
        </div>
        <button className="focus-ring rounded-full border border-charcoal/15 bg-ivory p-3 xl:hidden" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      {open ? (
        <nav className="container-padded grid max-h-[calc(100dvh-84px)] gap-2 overflow-y-auto pb-5 xl:hidden" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div className="rounded-2xl bg-mist p-2" key={item.href}>
              <Link className="block rounded-xl px-3 py-2 font-semibold text-charcoal" href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
              {item.children ? (
                <div className="grid gap-1 pl-3">
                  {item.children.map((child) => (
                    <Link className="rounded-xl px-3 py-2 text-sm text-ink/75" href={child.href} key={child.href} onClick={() => setOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 font-semibold text-ivory" href={whatsappHref()} onClick={() => setOpen(false)}>
            <MessageCircle size={18} aria-hidden="true" /> Get Quote on WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}
