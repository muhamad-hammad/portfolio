import Image from "next/image";
import { hero } from "@/data/portfolio";

export function Hero() {
  const stackPills = hero.currentStack.split("+").map((s) => s.trim()).filter(Boolean);

  return (
    <section
      id="hero"
      className="scroll-mt-14 sm:scroll-mt-16 section-container section-padding"
    >
      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        <div>
          <h1 className="font-display text-[clamp(2rem,8vw,4.5rem)] font-bold tracking-tight leading-[1.08]">
            {hero.name}
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted max-w-md leading-relaxed">
            {hero.tagline}
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
            <a
              href={hero.cvUrl}
              className="focus-ring bg-accent text-black px-5 py-2.5 rounded-md font-medium hover:opacity-90 text-sm sm:text-base transition-opacity"
            >
              Download Resume
            </a>
            <a
              href={hero.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring border border-border bg-surface px-5 py-2.5 rounded-md hover:border-accent text-sm sm:text-base transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-surface border-2 border-border overflow-hidden flex items-center justify-center flex-shrink-0">
              {hero.avatarUrl ? (
                <Image
                  src={hero.avatarUrl}
                  alt={hero.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="font-display text-3xl sm:text-4xl font-bold text-muted select-none">
                  MH
                </span>
              )}
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-5">
            <div className="font-mono text-[11px] sm:text-xs text-muted tracking-widest uppercase">
              STATUS
            </div>
            <div className="mt-2 text-base sm:text-lg">{hero.status}</div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-5">
            <div className="font-mono text-[11px] sm:text-xs text-muted tracking-widest uppercase">
              CURRENTLY BUILDING
            </div>
            <div className="mt-2 font-display text-lg sm:text-xl">
              {hero.currentProject}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {stackPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-block bg-tag-bg border border-border px-2.5 py-1 rounded-md font-mono text-[11px] sm:text-xs"
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
