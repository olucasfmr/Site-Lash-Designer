import { about } from "@/config";
import Reveal from "./Reveal";
import Section, { SectionHeading } from "./Section";
import { SparkleIcon } from "./Icons";

export default function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading overline={about.overline} title={about.title} center={false} />
          <Reveal>
            <p className="font-display text-2xl font-medium italic leading-snug md:text-3xl">
              {about.lead}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-cafe/75">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="relative mx-auto max-w-sm md:max-w-none">
            <div
              className="absolute -inset-3 rounded-[2.5rem] border border-taupe"
              aria-hidden="true"
            />
            <img
              src={about.image.src}
              alt={about.image.alt}
              className="relative aspect-[4/5] w-full rounded-[2rem] border border-greige/60 object-cover shadow-xl shadow-cafe/10"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-4 md:gap-4">
        {about.values.map((value, index) => (
          <Reveal key={value.name} delay={index * 80} className="h-full">
            <div className="h-full rounded-2xl border border-greige/60 bg-cream p-4 text-center md:p-6">
              <SparkleIcon className="mx-auto h-4 w-4 text-taupe" />
              <h3 className="mt-2 font-display text-lg font-medium md:text-xl">
                {value.name}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-cafe/60">
                {value.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
