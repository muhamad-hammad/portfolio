"use client";

import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

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
          <ProjectCard key={project.githubUrl} project={project} />
        ))}
      </div>
    </section>
  );
}
