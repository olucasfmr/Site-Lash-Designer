"use client";

import { contact, cta, locations, whatsappLink } from "@/config";
import Reveal from "./Reveal";
import Section, { SectionHeading } from "./Section";
import { ClockIcon, InstagramIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { useLocationsModal } from "./LocationsPopover";

export default function Contact() {
  // Modal de endereços reaproveitado do rodapé
  const { triggerRef, abrirModalEnderecos, modal } = useLocationsModal();

  // Teclado no card Endereço: Enter e Space abrem o modal
  const onAddressKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      abrirModalEnderecos();
    }
  };

  const cards = [
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      content: (
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-cafe px-5 py-2.5 text-xs font-medium tracking-wide text-offwhite transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          {contact.phone}
        </a>
      ),
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      content: (
        <a
          href={contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram da Izabel Karine"
          className="mt-4 inline-block text-sm font-medium text-cafe underline decoration-taupe underline-offset-4 transition-colors hover:text-cafe/70"
        >
          {contact.instagram}
        </a>
      ),
    },
    {
      icon: PinIcon,
      label: "Endereço",
      // Card inteiro clicável: abre o mesmo modal de endereços do rodapé
      wrapperClass:
        "cursor-pointer transition-colors hover:border-taupe/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cafe/50 focus-visible:outline-offset-2",
      interactiveProps: {
        role: "button",
        tabIndex: 0,
        "aria-label": "Ver endereços de atendimento",
        "aria-haspopup": "dialog",
        ref: triggerRef,
        onClick: abrirModalEnderecos,
        onKeyDown: onAddressKeyDown,
      },
      content: (
        <div className="mt-4 text-sm leading-relaxed text-cafe/75">
          {locations.places.map((place) => (
            <p key={place.name}>{place.name}</p>
          ))}
        </div>
      ),
    },
    {
      icon: ClockIcon,
      label: "Horários",
      content: (
        <ul className="mt-4 space-y-1.5 text-sm text-cafe/75">
          {contact.hours.map((hour) => (
            <li key={hour}>{hour}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <Section id="contato">
      <SectionHeading overline={contact.overline} title={contact.title} />

      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {cards.map((card, index) => (
          <Reveal key={card.label} delay={index * 80} className="h-full">
            <div
              className={`group h-full rounded-3xl border border-greige/60 bg-cream p-6 ${card.wrapperClass || ""}`}
              {...(card.interactiveProps || {})}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-taupe/25 text-cafe transition-colors duration-300 group-hover:bg-taupe/40">
                <card.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-cafe/50">
                {card.label}
              </p>
              {card.content}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150}>
        <div className="relative mt-14 overflow-hidden rounded-[2.5rem] bg-cafe px-8 py-14 text-center md:mt-16 md:px-16 md:py-20">
          <div
            className="blob-a absolute -left-20 -top-20 h-64 w-64 rounded-full bg-offwhite/5 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="blob-b absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-taupe/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <Reveal delay={100}>
              <h3 className="mx-auto max-w-xl font-display text-3xl font-medium leading-tight text-offwhite md:text-4xl">
                {cta.title}
              </h3>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-offwhite/70">
                {cta.text}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-offwhite px-8 py-4 text-sm font-semibold tracking-wide text-cafe transition-transform hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {cta.button}
              </a>
            </Reveal>
          </div>
        </div>
      </Reveal>

      {/* Modal de endereços — o mesmo do rodapé */}
      {modal}
    </Section>
  );
}
