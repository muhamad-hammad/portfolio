import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-14 sm:scroll-mt-16 section-container section-padding"
    >
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em]">Skills</h2>
      <hr className="mt-4 border-border" />

      <div className="mt-4 sm:mt-6 divide-y divide-border">
        {skills.map((group) => (
          <div
            key={group.group}
            className="grid sm:grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-0.5 sm:gap-4 py-2 sm:py-2.5"
          >
            <h3 className="font-mono text-[10px] sm:text-[11px] font-medium text-muted tracking-[0.04em] uppercase mb-0.5 sm:mb-0 pt-1">
              {group.group}
            </h3>
            <ul className="flex flex-wrap gap-1 sm:gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="bg-surface border border-border px-1.5 sm:px-2 py-0 sm:py-0.5 rounded font-mono text-[10px] sm:text-[11px] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
