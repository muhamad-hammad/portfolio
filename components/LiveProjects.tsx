"use client";

import { projects } from "@/data/portfolio";

function screenshotUrl(liveUrl: string) {
  // thum.io: 1200x750 (16:10), refreshes weekly (maxAge in hours).
  return `https://image.thum.io/get/width/1200/crop/750/maxAge/168/noanimate/${liveUrl}`;
}

export default function LiveProjects() {
  const liveProjects = projects.filter((p) => p.liveUrl !== null);

  if (liveProjects.length === 0) return null;

  return (
    <section
      id="live"
      className="scroll-mt-14 sm:scroll-mt-16 section-container section-padding"
    >
      <div className="flex items-center gap-3 flex-wrap">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
          Live Projects
        </h2>
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-mono font-medium text-success border-success/30 bg-success/8">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          {liveProjects.length} deployed
        </span>
      </div>
      <hr className="mt-4 border-border" />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {liveProjects.map((project) => (
          <a
            key={project.githubUrl}
            href={project.liveUrl!}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open live preview of ${project.title}`}
            className="group block overflow-hidden rounded-lg border border-border bg-surface transition-all hover:border-accent hover:bg-surface-2 focus-ring"
          >
            <div className="relative aspect-[16/10] bg-bg overflow-hidden border-b border-border">
              <img
                src={screenshotUrl(project.liveUrl!)}
                alt=""
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="px-3 py-2.5 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <h3 className="font-display text-sm font-semibold leading-tight tracking-[-0.02em] truncate">
                  {project.title}
                </h3>
                <span className="flex-shrink-0 flex items-center gap-1 px-1.5 py-0.5 rounded-full border text-[10px] font-mono font-medium text-success border-success/30 bg-success/8">
                  <span className="w-1 h-1 rounded-full bg-success" />
                  live
                </span>
              </div>
              <span className="flex-shrink-0 text-xs font-mono text-muted group-hover:text-accent transition-colors">
                Live ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
