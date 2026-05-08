import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold">Projects</h2>
      <hr className="mt-4 border-border" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
