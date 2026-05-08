import { hero } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 max-w-6xl mx-auto px-6 py-24"
    >
      <div className="bg-surface border border-border border-l-4 border-l-accent rounded-xl p-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Let&apos;s build something.
        </h2>
        <p className="mt-4 text-muted max-w-xl">
          Open to AI/ML internships, game-dev collaborations, and interesting
          side projects. Drop a line — I read every email.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${hero.email}`}
            className="focus-ring bg-accent text-black px-5 py-2.5 rounded-md font-medium hover:opacity-90"
          >
            Email me →
          </a>
          <a
            href={hero.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring border border-border bg-bg px-5 py-2.5 rounded-md hover:border-accent"
          >
            GitHub
          </a>
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring border border-border bg-bg px-5 py-2.5 rounded-md hover:border-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
