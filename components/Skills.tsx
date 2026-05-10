import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-14 sm:scroll-mt-16 section-container section-padding"
    >
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">Skills</h2>
      <hr className="mt-4 border-border" />

      <div className="mt-8 sm:mt-10 divide-y divide-border">
        {skills.map((group) => (
          <div
            key={group.group}
            className="grid sm:grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] gap-1 sm:gap-4 py-4 sm:py-5"
          >
            <h3 className="font-display text-sm sm:text-base font-semibold text-muted mb-1 sm:mb-0">
              {group.group}
            </h3>
            <ul className="flex flex-wrap gap-1.5 sm:gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="bg-tag-bg border border-border px-2 sm:px-3 py-0.5 sm:py-1 rounded-md font-mono text-[11px] sm:text-sm text-muted"
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
