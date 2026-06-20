"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MessageCircle, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { siteConfig, whatsappHref } from "@/data/siteConfig";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const desktopNav = navigation.filter((item) => item.label !== "Request Quote");

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(59,43,51,0.08)] bg-[rgba(255,250,246,0.9)] shadow-[0_16px_42px_rgba(80,57,65,0.08)] backdrop-blur-xl">
      <div className="container-padded flex min-h-[82px] items-center justify-between gap-4">
        <Link className="focus-ring flex items-center gap-3 rounded-sm" href="/" aria-label="Kiora CosmoTech home">
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[1.15rem] border border-[rgba(154,81,107,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,244,239,0.9))] shadow-[0_14px_30px_rgba(101,65,78,0.08)]">
            <Image
              src={siteConfig.logo}
              alt="Kiora CosmoTech logo"
              fill
              className="object-contain p-1.5"
              sizes="48px"
              priority
            />
          </span>
          <span>
            <span className="block font-display text-[1.5rem] font-semibold leading-none text-[rgba(48,34,43,0.96)]">
              Kiora CosmoTech
            </span>
            <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[rgba(148,84,109,0.88)]">
              Luxury Cosmetic Manufacturing
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {desktopNav.map((item) => (
            <div
              className="relative -my-3 py-3"
              key={item.href}
              onMouseEnter={() => setActiveMenu(item.children ? item.href : null)}
              onMouseLeave={() => setActiveMenu((current) => (current === item.href ? null : current))}
            >
              <Link
                className="focus-ring inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold text-[rgba(56,41,49,0.84)] transition hover:bg-white/72 hover:text-[rgba(122,69,88,0.96)]"
                href={item.href}
                onFocus={() => setActiveMenu(item.children ? item.href : null)}
              >
                {item.label === "Quality & Compliance" ? "Quality" : item.label}
                {item.children ? <ChevronDown size={15} aria-hidden="true" className="text-[rgba(148,84,109,0.72)]" /> : null}
              </Link>
              {item.children ? (
                <div
                  className={`absolute left-0 top-full z-50 pt-2 transition duration-150 ${
                    activeMenu === item.href ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <div className="grid w-[19rem] gap-1 rounded-[1.6rem] border border-[rgba(59,43,51,0.08)] bg-[linear-gradient(180deg,rgba(255,252,248,0.98),rgba(255,247,242,0.94))] p-3 shadow-[0_26px_60px_rgba(73,51,60,0.12)] backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        className="focus-ring rounded-[1rem] px-4 py-3 text-sm font-semibold text-[rgba(66,50,58,0.82)] transition hover:bg-[rgba(255,239,235,0.78)] hover:text-[rgba(122,69,88,0.96)]"
                        href={child.href}
                        key={child.href}
                        onFocus={() => setActiveMenu(item.href)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <a
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(59,43,51,0.1)] bg-white/66 text-[rgba(122,69,88,0.92)] transition hover:bg-white"
            href={whatsappHref()}
            aria-label="Chat with Kiora CosmoTech on WhatsApp"
          >
            <MessageCircle size={18} aria-hidden="true" />
          </a>
          <a
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(59,43,51,0.1)] bg-white/66 text-[rgba(122,69,88,0.92)] transition hover:bg-white"
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            aria-label="Call Kiora CosmoTech"
          >
            <Phone size={17} aria-hidden="true" />
          </a>
          <Link
            className="focus-ring site-button-primary rounded-full px-5 py-2.5 text-sm font-semibold text-ivory transition"
            href="/request-quote"
          >
            Request Quote
          </Link>
        </div>
        <button
          className="focus-ring rounded-full border border-[rgba(59,43,51,0.14)] bg-white/80 p-3 text-[rgba(56,41,49,0.88)] xl:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      {open ? (
        <nav className="container-padded grid max-h-[calc(100dvh-84px)] gap-2 overflow-y-auto pb-5 xl:hidden" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div className="site-panel rounded-[1.35rem] p-2.5" key={item.href}>
              <Link
                className="block rounded-xl px-3 py-2 font-semibold text-[rgba(56,41,49,0.9)]"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="grid gap-1 pl-3">
                  {item.children.map((child) => (
                    <Link
                      className="rounded-xl px-3 py-2 text-sm text-[rgba(67,50,58,0.74)]"
                      href={child.href}
                      key={child.href}
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <a
            className="focus-ring site-button-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-ivory"
            href={whatsappHref()}
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={18} aria-hidden="true" /> Get Quote on WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}
