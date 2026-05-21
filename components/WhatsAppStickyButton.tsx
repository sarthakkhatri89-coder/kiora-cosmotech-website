import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/siteConfig";

export default function WhatsAppStickyButton() {
  return (
    <a
      className="focus-ring fixed bottom-4 right-4 z-[60] inline-flex min-h-11 items-center gap-2 rounded-full bg-teal px-4 py-2.5 text-sm font-semibold text-ivory shadow-premium transition hover:bg-charcoal sm:bottom-6 sm:right-6 sm:px-5"
      href={whatsappHref()}
      aria-label="Get cosmetic manufacturing quote on WhatsApp"
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Quote</span>
    </a>
  );
}
