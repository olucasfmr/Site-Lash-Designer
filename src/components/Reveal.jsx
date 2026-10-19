"use client";

import { useEffect, useRef, useState } from "react";

const HIDDEN = {
  up: "translate-y-8 opacity-0",
  fade: "opacity-0",
  zoom: "scale-[0.96] opacity-0",
  blur: "scale-[1.04] blur-[8px] opacity-0",
};

const SHOWN = {
  up: "translate-y-0 opacity-100",
  fade: "opacity-100",
  zoom: "scale-100 opacity-100",
  blur: "scale-100 blur-[0px] opacity-100",
};

export default function Reveal({ children, delay = 0, className = "", variant = "up" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = HIDDEN[variant] || HIDDEN.up;
  const shown = SHOWN[variant] || SHOWN.up;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? shown : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}
