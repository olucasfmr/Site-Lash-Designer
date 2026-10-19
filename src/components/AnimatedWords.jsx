"use client";

import { Fragment, useEffect, useState } from "react";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export default function AnimatedWords({ text, accentWord }) {
  const [on, setOn] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const id = window.setTimeout(() => setOn(true), 200);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      {words.map((word, i) => {
        const isAccent =
          !!accentWord && word.replace(/[^\p{L}\p{M}]/gu, "") === accentWord;
        return (
          <Fragment key={`${word}-${i}`}>
            <span
              className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                on
                  ? "translate-y-0 scale-100 opacity-100 blur-[0px]"
                  : "translate-y-4 scale-[0.98] opacity-0 blur-[6px]"
              }`}
              style={{ transitionDelay: `${i * 65}ms` }}
            >
              {isAccent ? (
                <em className="relative inline-block font-medium">
                  {word}
                  <svg
                    viewBox="0 0 120 10"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="absolute -bottom-[0.14em] left-0 h-[0.14em] w-full"
                  >
                    <path
                      d="M2 7 Q 30 2 60 6 T 118 5"
                      fill="none"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      vectorEffect="non-scaling-stroke"
                      pathLength="1"
                      className="stroke-taupe"
                      style={{
                        strokeDasharray: 1,
                        strokeDashoffset: on ? 0 : 1,
                        transition: `stroke-dashoffset 0.9s ${EASE} 1.25s`,
                      }}
                    />
                  </svg>
                </em>
              ) : (
                word
              )}
            </span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        );
      })}
    </>
  );
}
