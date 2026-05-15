import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-14 sm:scroll-mt-16 section-container section-padding"
    >
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
        Education
      </h2>
      <hr className="mt-4 border-border" />
      <ol className="mt-8 sm:mt-10">
        {education.map((entry) => (
          <li
            key={`${entry.date}-${entry.role}`}
            className="grid sm:grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-1 sm:gap-6 py-6 sm:py-8 border-b border-border first:border-t first:border-t-border"
          >
            <div className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.04em] text-muted pt-0.5">
              {entry.date}
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-semibold tracking-[-0.02em]">
                {entry.role}
              </h3>
              <div className="mt-1 text-sm sm:text-base text-muted">{entry.org}</div>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                {entry.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
