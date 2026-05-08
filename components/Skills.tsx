import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold">Skills</h2>
      <hr className="mt-4 border-border" />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.group}
            className="bg-surface border border-border rounded-lg p-6"
          >
            <h3 className="font-display text-xl font-semibold">
              {group.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="bg-tagBg border border-border px-3 py-1 rounded-md font-mono text-sm text-muted"
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
