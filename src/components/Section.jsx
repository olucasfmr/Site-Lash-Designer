import { SparkleIcon } from "./Icons";

export default function Section({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-5 py-20 md:scroll-mt-24 md:px-10 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({ overline, title, center = true }) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-cafe/60">
        {overline}
      </p>
      <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
        {title}
      </h2>
      <div
        className={`mt-6 flex items-center gap-3 ${center ? "justify-center" : ""}`}
        aria-hidden="true"
      >
        <span className="h-px w-10 bg-taupe" />
        <SparkleIcon className="h-3.5 w-3.5 text-taupe" />
        <span className="h-px w-10 bg-taupe" />
      </div>
    </div>
  );
}
