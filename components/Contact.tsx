import { hero } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-14 sm:scroll-mt-16 section-container section-padding"
    >
      <div className="bg-surface border border-border border-l-4 border-l-accent rounded-xl p-5 sm:p-8 md:p-10">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
          Let&apos;s build something.
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted max-w-xl leading-relaxed">
          Open to AI/ML internships, Agentic AI/ GenAI roles, and interesting
          side projects. Drop a line — I read every email.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap gap-3">
          <a
            href={`mailto:${hero.email}`}
            className="focus-ring bg-accent text-black px-5 py-2.5 rounded-md font-medium hover:opacity-90 text-sm sm:text-base transition-opacity text-center"
          >
            Email me →
          </a>
          <a
            href={hero.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring border border-border bg-bg px-5 py-2.5 rounded-md hover:border-accent text-sm sm:text-base transition-colors text-center"
          >
            GitHub
          </a>
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring border border-border bg-bg px-5 py-2.5 rounded-md hover:border-accent text-sm sm:text-base transition-colors text-center"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
