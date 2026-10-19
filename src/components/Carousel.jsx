"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

export default function Carousel({ photos, alt, className = "" }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const total = photos.length;

  const step = useCallback(
    (direction) => {
      setIndex((i) => (i + direction + total) % total);
      setCycle((c) => c + 1);
    },
    [total]
  );

  const prev = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);

  const goTo = useCallback(
    (target) => {
      setIndex(target % total);
      setCycle((c) => c + 1);
    },
    [total]
  );

  useEffect(() => {
    if (paused || total < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [paused, total, cycle]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carrossel"
      aria-label={alt}
    >
      {photos.map((photo, i) => (
        <img
          key={photo}
          src={photo}
          alt={`${alt} — foto ${i + 1}`}
          aria-hidden={i !== index}
          className={`carousel-img absolute inset-0 h-full w-full object-cover ${
            i === index ? "scale-[1.06] opacity-100" : "scale-100 opacity-0"
          }`}
        />
      ))}

      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-cafe/30 p-2.5 text-offwhite backdrop-blur-sm transition-colors hover:bg-cafe/50"
        aria-label="Foto anterior"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-cafe/30 p-2.5 text-offwhite backdrop-blur-sm transition-colors hover:bg-cafe/50"
        aria-label="Próxima foto"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir para a foto ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-4 bg-offwhite"
                : "w-1.5 bg-offwhite/50 hover:bg-offwhite/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
