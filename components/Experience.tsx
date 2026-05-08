import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold">
        Experience
      </h2>
      <hr className="mt-4 border-border" />
      <ol className="mt-10 divide-y divide-border">
        {experience.map((entry) => (
          <li
            key={`${entry.date}-${entry.role}`}
            className="grid md:grid-cols-[160px_1fr] gap-4 py-6"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-muted">
              {entry.date}
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">
                {entry.role}
              </h3>
              <div className="text-muted">{entry.org}</div>
              <p className="mt-3 leading-relaxed">{entry.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
