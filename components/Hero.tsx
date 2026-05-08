import { hero } from "@/data/portfolio";

export function Hero() {
  const stackPills = hero.currentStack.split("+").map((s) => s.trim()).filter(Boolean);

  return (
    <section
      id="hero"
      className="scroll-mt-20 max-w-6xl mx-auto px-6 py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
            {hero.name}
          </h1>
          <p className="mt-6 text-lg text-muted max-w-md">{hero.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={hero.cvUrl}
              className="focus-ring bg-accent text-black px-5 py-2.5 rounded-md font-medium hover:opacity-90"
            >
              Download CV
            </a>
            <a
              href={hero.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring border border-border bg-surface px-5 py-2.5 rounded-md hover:border-accent"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-surface border border-border rounded-lg p-5">
            <div className="font-mono text-xs text-muted tracking-widest">
              STATUS
            </div>
            <div className="mt-2 text-lg">{hero.status}</div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-5">
            <div className="font-mono text-xs text-muted tracking-widest">
              CURRENTLY BUILDING
            </div>
            <div className="mt-2 font-display text-xl">
              {hero.currentProject}
            </div>
            <div className="mt-3">
              {stackPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-block bg-tagBg border border-border px-2.5 py-1 rounded-md font-mono text-xs mr-2"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
