"use client";

import { useState } from "react";
import { courses, whatsappLink } from "@/config";
import Reveal from "./Reveal";
import Section, { SectionHeading } from "./Section";
import Lightbox from "./Lightbox";
import { CheckIcon, SparkleIcon, WhatsAppIcon } from "./Icons";

function CourseCard({ card, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-3xl border border-greige/60 bg-offwhite p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cafe/10 md:p-8">
        <span className="inline-flex w-fit rounded-full bg-greige/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cafe">
          {card.tag}
        </span>
        <h3 className="mt-4 font-display text-3xl font-medium">{card.name}</h3>
        <p className="mt-1 font-display text-lg italic text-taupe">
          {card.subtitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-cafe/70">
          {card.description}
        </p>

        <ul className="mt-5 flex flex-col gap-2.5">
          {card.topics.map((topic) => (
            <li
              key={topic}
              className="flex items-start gap-2.5 text-sm text-cafe/80"
            >
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-taupe" />
              {topic}
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-2xl border border-greige/50 bg-cream p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cafe/60">
            Bônus
          </p>
          <ul className="mt-2 flex flex-col gap-1.5">
            {card.bonus.map((bonus) => (
              <li
                key={bonus}
                className="flex items-start gap-2 text-sm text-cafe/80"
              >
                <SparkleIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-taupe" />
                {bonus}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-6">
          <p className="font-display text-3xl font-medium">{card.price}</p>
          <p className="mt-1 text-sm text-cafe/60">{card.payment}</p>
        </div>
        <a
          href={whatsappLink(card.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-cafe px-5 py-3.5 text-sm font-medium tracking-wide text-offwhite transition-transform hover:scale-105 active:scale-95"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {card.cta}
        </a>
      </div>
    </Reveal>
  );
}

export default function Courses() {
  const [open, setOpen] = useState(false);
  const students = courses.students;

  return (
    <Section id="cursos" className="bg-cream">
      <SectionHeading
        overline={courses.overline}
        title={courses.title}
        subtitle={courses.subtitle}
      />

      <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-2">
        {courses.cards.map((card, index) => (
          <CourseCard key={card.tag} card={card} delay={index * 120} />
        ))}
      </div>

      <p className="mt-14 text-center font-display text-xl italic text-cafe/80 md:text-2xl">
        {students.title}
      </p>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {students.photos.map((photo, index) => (
          <Reveal key={photo} delay={(index % 3) * 80}>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-greige/60 bg-offwhite"
              aria-label="Ampliar: Alunas em ação"
            >
              <span className="block aspect-[4/5] overflow-hidden">
                <img
                  src={photo}
                  alt={`Alunas em ação — foto ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-cafe/85 via-cafe/40 to-transparent px-4 pb-3 pt-10">
                <span className="font-display text-sm italic text-offwhite md:text-base">
                  Alunas em ação
                </span>
                <span className="mb-0.5 hidden text-[10px] tracking-[0.25em] text-offwhite/70 md:block">
                  VER
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {open && (
        <Lightbox
          photos={students.photos}
          name="Alunas em ação"
          onClose={() => setOpen(false)}
        />
      )}
    </Section>
  );
}
