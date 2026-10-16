"use client";

import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/config";
import Reveal from "./Reveal";
import Section, { SectionHeading } from "./Section";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./Icons";

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const photos = gallery.photos;

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () =>
      setOpen((current) =>
        current === null ? null : (current - 1 + photos.length) % photos.length
      ),
    [photos.length]
  );
  const next = useCallback(
    () =>
      setOpen((current) =>
        current === null ? null : (current + 1) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <Section id="galeria" className="bg-greige/40">
      <SectionHeading overline={gallery.overline} title={gallery.title} />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {photos.map((photo, index) => (
          <Reveal key={photo.src} delay={(index % 3) * 80}>
            <button
              type="button"
              onClick={() => setOpen(index)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-greige/60 bg-cream"
              aria-label={`Ampliar: ${photo.caption}`}
            >
              <span className="block aspect-[4/5] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-cafe/85 via-cafe/40 to-transparent px-4 pb-3 pt-10">
                <span className="font-display text-sm italic text-offwhite md:text-base">
                  {photo.caption}
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
        <div
          className="anim-fade fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={photos[open].caption}
        >
          <button
            type="button"
            className="absolute inset-0 bg-cafe/90 backdrop-blur-sm"
            onClick={close}
            aria-label="Fechar"
            tabIndex={-1}
          />
          <figure className="anim-zoom relative z-10 flex max-w-3xl flex-col items-center">
            <img
              src={photos[open].src}
              alt={photos[open].alt}
              className="max-h-[76vh] w-auto max-w-full rounded-xl border border-offwhite/20 object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center">
              <p className="font-display text-lg italic text-offwhite">
                {photos[open].caption}
              </p>
              <p className="mt-1 text-xs tracking-widest text-offwhite/60">
                {open + 1} / {photos.length}
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-offwhite/20 bg-offwhite/10 p-3 text-offwhite transition-colors hover:bg-offwhite/20 md:left-6"
            aria-label="Foto anterior"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-offwhite/20 bg-offwhite/10 p-3 text-offwhite transition-colors hover:bg-offwhite/20 md:right-6"
            aria-label="Próxima foto"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={close}
            className="absolute right-3 top-3 z-20 rounded-full border border-offwhite/20 bg-offwhite/10 p-3 text-offwhite transition-colors hover:bg-offwhite/20 md:right-6 md:top-6"
            aria-label="Fechar visualização"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </Section>
  );
}
