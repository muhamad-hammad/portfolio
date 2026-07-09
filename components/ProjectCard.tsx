import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-surface border border-border rounded-lg p-4 sm:p-6 flex flex-col h-full transition-all hover:border-accent hover:bg-surface-2">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-lg sm:text-xl font-semibold leading-snug tracking-[-0.02em]">
          {project.title}
        </h3>
        {project.liveUrl && (
          <span className="flex-shrink-0 flex items-center gap-1 px-1.5 py-0.5 rounded-full border text-[10px] font-mono font-medium text-success border-success/30 bg-success/8">
            <span className="w-1 h-1 rounded-full bg-success" />
            live
          </span>
        )}
      </div>
      <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted leading-relaxed">
        {project.description}
      </p>
      <ul className="mt-3 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="bg-tag-bg border border-border px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md font-mono text-[11px] sm:text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-4 sm:pt-6 flex flex-wrap gap-3">
        <a
          href={project.liveUrl ?? project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring border border-border bg-bg px-4 py-2 rounded-md text-sm hover:border-accent transition-colors"
        >
          {project.liveUrl ? "Live ↗" : "Code ↗"}
        </a>
      </div>
    </article>
  );
}
