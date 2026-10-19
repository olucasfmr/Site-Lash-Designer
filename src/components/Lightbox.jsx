"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./Icons";

export default function Lightbox({ photos, name, onClose }) {
  const [index, setIndex] = useState(0);
  const total = photos.length;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="anim-fade fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={name}
    >
      <button
        type="button"
        className="absolute inset-0 bg-cafe/90 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fechar"
        tabIndex={-1}
      />
      <figure className="anim-zoom relative z-10 flex max-w-3xl flex-col items-center">
        <img
          src={photos[index]}
          alt={`${name} — foto ${index + 1}`}
          className="max-h-[76vh] w-auto max-w-full rounded-xl border border-offwhite/20 object-contain shadow-2xl"
        />
        <figcaption className="mt-4 text-center">
          <p className="font-display text-lg italic text-offwhite">{name}</p>
          <p className="mt-1 text-xs tracking-widest text-offwhite/60">
            {index + 1} / {total}
          </p>
        </figcaption>
      </figure>

      {total > 1 && (
        <>
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
        </>
      )}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 z-20 rounded-full border border-offwhite/20 bg-offwhite/10 p-3 text-offwhite transition-colors hover:bg-offwhite/20 md:right-6 md:top-6"
        aria-label="Fechar visualização"
      >
        <CloseIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
