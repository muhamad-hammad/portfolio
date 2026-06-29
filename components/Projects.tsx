"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

const MAX_VISIBLE = 4;

const DOMAIN_TABS = [
  "All",
  "Live",
  ...Array.from(new Set(projects.map((p) => p.domain))).sort(),
];

export default function Projects() {
  const [activeDomain, setActiveDomain] = useState<string>("AI & GenAI");

  const [showAllDomains, setShowAllDomains] = useState<
    Record<string, boolean>
  >({});

  const filtered = useMemo(() => {
    if (activeDomain === "All") {
      return projects;
    }

    if (activeDomain === "Live") {
      return projects.filter((p) => p.liveUrl !== null);
    }

    return projects.filter((p) => p.domain === activeDomain);
  }, [activeDomain]);

  const groups = useMemo(() => {
    if (activeDomain === "All") {
      return DOMAIN_TABS.filter(
        (d) => d !== "All" && d !== "Live"
      ).map((domain) => ({
        label: domain,
        items: projects.filter((p) => p.domain === domain),
      }));
    }

    return [
      {
        label: activeDomain,
        items: filtered,
      },
    ];
  }, [activeDomain, filtered]);

  const toggleShowAll = (label: string) => {
    setShowAllDomains((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleTabChange = (domain: string) => {
    setActiveDomain(domain);
    setShowAllDomains({});
  };

  return (
    <section
      id="projects"
      className="scroll-mt-14 sm:scroll-mt-16 section-container section-padding"
    >
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
        Projects
      </h2>

      <hr className="mt-4 border-border" />

      <div
        className="mt-6 flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide"
        role="tablist"
        aria-label="Filter projects by domain"
      >
        {DOMAIN_TABS.map((domain) => (
          <button
            key={domain}
            type="button"
            role="tab"
            aria-selected={activeDomain === domain}
            onClick={() => handleTabChange(domain)}
            className={[
              "flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 focus-ring",
              activeDomain === domain
                ? "bg-surface-2 text-text border-border"
                : "bg-bg text-muted border-border hover:border-accent hover:text-text",
            ].join(" ")}
          >
            {domain === "Live" ? (
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                {domain}
              </span>
            ) : (
              domain
            )}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-10">
        {groups.map(({ label, items }) => {
          if (items.length === 0) {
            return null;
          }

          const isExpanded = !!showAllDomains[label];

          const visibleProjects = isExpanded
            ? items
            : items.slice(0, MAX_VISIBLE);

          const hasMore = items.length > MAX_VISIBLE;

          return (
            <div key={label}>
              {activeDomain === "All" && (
                <h3 className="font-mono text-xs font-medium text-muted tracking-[0.04em] uppercase mb-3 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />

                  {label}

                  <span className="text-xs font-normal text-muted/60">
                    ({items.length})
                  </span>
                </h3>
              )}

              <div
                className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin"
                role="list"
              >
                {visibleProjects.map((project) => (
                  <div
                    key={project.githubUrl}
                    role="listitem"
                    className="flex-shrink-0 w-[min(320px,85vw)] sm:w-80 snap-start"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}

                {hasMore && !isExpanded && (
                  <div
                    role="listitem"
                    className="flex-shrink-0 w-[min(180px,60vw)] sm:w-44 snap-start flex items-center justify-center"
                  >
                    <button
                      type="button"
                      onClick={() => toggleShowAll(label)}
                      className="focus-ring w-full h-full min-h-[160px] flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border text-muted hover:border-accent hover:text-text transition-all duration-200 group"
                      aria-label={`Show all ${label} projects`}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        +{items.length - MAX_VISIBLE}
                      </span>

                      <span className="text-xs font-medium">
                        Show All
                      </span>
                    </button>
                  </div>
                )}
              </div>

              {hasMore && isExpanded && (
                <button
                  type="button"
                  onClick={() => toggleShowAll(label)}
                  className="focus-ring mt-2 text-xs text-muted hover:text-text border border-border hover:border-accent rounded-full px-4 py-1.5 transition-all duration-200"
                >
                  ← Show Less
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}