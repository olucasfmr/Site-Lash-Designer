import { packages, whatsappLink } from "@/config";
import Reveal from "./Reveal";
import Section, { SectionHeading } from "./Section";
import { WhatsAppIcon } from "./Icons";

export default function Packages() {
  return (
    <Section id="pacotes">
      <SectionHeading overline={packages.overline} title={packages.title} />

      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {packages.items.map((item, index) => (
          <Reveal key={item.name} delay={index * 80} className="h-full">
            <div
              className={`relative flex h-full flex-col rounded-3xl border p-7 transition-transform duration-300 hover:-translate-y-1 ${
                item.featured
                  ? "border-taupe bg-greige/25 shadow-lg shadow-taupe/20"
                  : "border-greige/60 bg-cream"
              }`}
            >
              {item.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-taupe px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cafe">
                  Mais pedido
                </span>
              )}
              <h3 className="font-display text-2xl font-medium">{item.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cafe/70">
                {item.description}
              </p>
              <p className="mt-6 font-display text-3xl font-medium">{item.price}</p>
              <a
                href={whatsappLink(
                  `Olá! Vi seu portfólio e gostaria de agendar o ${item.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-cafe px-5 py-3 text-sm font-medium tracking-wide text-offwhite transition-transform hover:scale-105"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {packages.cta}
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-cafe/60">
        {packages.note}
      </p>
    </Section>
  );
}
