import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-surface border border-border rounded-xl p-6 flex flex-col h-full transition hover:border-accent hover:-translate-y-0.5">
      <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
      <p className="mt-3 text-muted leading-relaxed">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="bg-tagBg border border-border px-2.5 py-1 rounded-md font-mono text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6 flex gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring border border-border bg-bg px-4 py-2 rounded-md text-sm hover:border-accent"
        >
          GitHub →
        </a>
        {project.liveUrl !== null && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring bg-accent text-black px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
          >
            Live →
          </a>
        )}
      </div>
    </article>
  );
}
