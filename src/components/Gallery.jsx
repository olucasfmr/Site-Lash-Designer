"use client";

import { useState } from "react";
import { gallery } from "@/config";
import Reveal from "./Reveal";
import Section, { SectionHeading } from "./Section";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const models = gallery.models;
  const [open, setOpen] = useState(null);

  return (
    <Section id="galeria" className="bg-greige/40">
      <SectionHeading overline={gallery.overline} title={gallery.title} />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
        {models.map((model, index) => (
          <Reveal key={model.id} delay={(index % 4) * 80}>
            <button
              type="button"
              onClick={() => setOpen(index)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-greige/60 bg-cream"
              aria-label={`Abrir galeria: ${model.name}`}
            >
              <span className="block aspect-[4/5] overflow-hidden">
                <img
                  src={model.photos[0]}
                  alt={`${model.name} — foto 1`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-cafe/85 via-cafe/40 to-transparent px-4 pb-3 pt-10">
                <span className="font-display text-sm italic text-offwhite md:text-base">
                  {model.name}
                </span>
                <span className="mb-0.5 hidden text-[10px] tracking-[0.25em] text-offwhite/70 md:block">
                  VER
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <Lightbox
          photos={models[open].photos}
          name={models[open].name}
          onClose={() => setOpen(null)}
        />
      )}
    </Section>
  );
}
