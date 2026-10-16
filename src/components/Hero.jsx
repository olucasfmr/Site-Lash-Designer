import { hero, whatsappLink } from "@/config";
import Reveal from "./Reveal";
import { SparkleIcon, WhatsAppIcon } from "./Icons";

function Headline() {
  const { headline, accentWord } = hero;
  if (!accentWord || !headline.includes(accentWord)) return headline;
  const [before, after] = headline.split(accentWord);
  return (
    <>
      {before}
      <em className="font-medium">{accentWord}</em>
      {after}
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-5 pb-20 pt-32 md:pb-28 md:pt-44"
    >
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-greige/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-taupe/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <img
            src={hero.logo}
            alt="Izabel Karine · Lash Design"
            className="h-40 w-72 object-cover md:h-52 md:w-96"
          />
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-10 font-display text-4xl font-medium leading-tight md:text-6xl">
            <Headline />
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-cafe/75 md:text-lg">
            {hero.subline}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-cafe px-8 py-4 text-sm font-medium tracking-wide text-offwhite shadow-lg shadow-cafe/20 transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {hero.cta}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center rounded-full border border-cafe/30 px-8 py-4 text-sm font-medium tracking-wide text-cafe transition-colors hover:border-cafe hover:bg-cafe/5"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="mt-5 text-xs tracking-wide text-cafe/60">{hero.note}</p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 flex items-center gap-3" aria-hidden="true">
            <span className="h-px w-12 bg-taupe" />
            <SparkleIcon className="h-3.5 w-3.5 text-taupe" />
            <span className="h-px w-12 bg-taupe" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
