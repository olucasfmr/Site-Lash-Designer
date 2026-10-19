import { contact, footer, nav, site, whatsappLink } from "@/config";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "./Icons";
import LocationsPopover from "./LocationsPopover";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cafe text-offwhite">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-10 md:py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <img
            src={footer.logo}
            alt={site.name}
            className="h-12 w-60 object-cover"
          />
          <p className="max-w-sm text-sm font-light leading-relaxed text-offwhite/60">
            {footer.tagline}
          </p>

          {/* Ícones sociais: WhatsApp · Instagram · TikTok · Localização */}
          <div className="flex gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-offwhite/25 p-3 text-offwhite/80 transition-colors hover:bg-offwhite/10 hover:text-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offwhite/60 focus-visible:outline-offset-2"
              aria-label="Agendar pelo WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-offwhite/25 p-3 text-offwhite/80 transition-colors hover:bg-offwhite/10 hover:text-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offwhite/60 focus-visible:outline-offset-2"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={contact.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-offwhite/25 p-3 text-offwhite/80 transition-colors hover:bg-offwhite/10 hover:text-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offwhite/60 focus-visible:outline-offset-2"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <LocationsPopover />
          </div>

          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            aria-label="Menu do rodapé"
          >
            {nav.flatMap((item) =>
              item.children ? (
                item.children.map((child) => (
                  <a
                    key={child.href}
                    href={child.href}
                    className="text-sm text-offwhite/70 transition-colors hover:text-offwhite"
                  >
                    {child.label}
                  </a>
                ))
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-offwhite/70 transition-colors hover:text-offwhite"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="mt-10 flex w-full flex-col items-center justify-between gap-3 border-t border-offwhite/10 pt-6 text-xs text-offwhite/50 sm:flex-row">
            <p>
              © {year} {site.name} · {site.role}
            </p>
            <p>{footer.credit}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
