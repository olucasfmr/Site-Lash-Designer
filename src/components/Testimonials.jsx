import { testimonials } from "@/config";
import Reveal from "./Reveal";
import Section, { SectionHeading } from "./Section";
import { StarIcon } from "./Icons";

export default function Testimonials() {
  return (
    <Section id="depoimentos" className="bg-greige/40">
      <SectionHeading overline={testimonials.overline} title={testimonials.title} />

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {testimonials.items.map((item, index) => (
          <Reveal key={item.name} delay={index * 100} className="h-full">
            <figure className="relative flex h-full flex-col rounded-3xl border border-greige/60 bg-cream p-8">
              <span
                className="font-display text-7xl leading-none text-taupe"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <div
                className="flex gap-1 text-cafe/40"
                aria-label="Avaliação de 5 estrelas"
              >
                {Array.from({ length: 5 }).map((_, star) => (
                  <StarIcon key={star} className="h-3.5 w-3.5" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cafe/80">
                {item.text}
              </blockquote>
              <figcaption className="mt-6 border-t border-greige/60 pt-4">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="mt-0.5 text-xs text-cafe/50">{item.detail}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
