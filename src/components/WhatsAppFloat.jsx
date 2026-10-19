import { whatsappLink } from "@/config";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="float-in group fixed bottom-5 right-5 z-50 md:bottom-6 md:right-6"
    >
      <span
        className="float-pulse absolute inset-0 rounded-full bg-cafe"
        aria-hidden="true"
      />
      <span className="icon-float relative flex h-14 w-14 items-center justify-center rounded-full bg-cafe text-offwhite shadow-xl shadow-cafe/30 transition-transform group-hover:scale-105">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-cafe px-3 py-2 text-xs text-offwhite opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
        Agendar horário
      </span>
    </a>
  );
}
