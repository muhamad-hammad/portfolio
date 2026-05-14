"use client";

import { useState, useMemo, useRef } from "react";
import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

const MAX_VISIBLE = 4;

// Derive ordered domain list – "All" first, then alphabetical unique domains
const ALL_DOMAINS = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.domain))).sort(),
];

export default function Projects() {
  const [activeDomain, setActiveDomain] = useState<string>("AI & GenAI");
  const [showAllDomains, setShowAllDomains] = useState<Record<string, boolean>>(
    {}
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  // Projects filtered to the active domain (or all)
  const filtered = useMemo(
    () =>
      activeDomain === "All"
        ? projects
        : projects.filter((p) => p.domain === activeDomain),
    [activeDomain]
  );

  // When "All" is selected, group by domain; otherwise treat as one flat group
  const groups: { label: string; items: typeof projects }[] = useMemo(() => {
    if (activeDomain !== "All") {
      return [{ label: activeDomain, items: filtered }];
    }
    return ALL_DOMAINS.filter((d) => d !== "All").map((domain) => ({
      label: domain,
      items: projects.filter((p) => p.domain === domain),
    }));
  }, [activeDomain, filtered]);

  const toggleShowAll = (label: string) =>
    setShowAllDomains((prev) => ({ ...prev, [label]: !prev[label] }));

  const handleTabChange = (domain: string) => {
    setActiveDomain(domain);
    // Reset expanded state when switching tabs
    setShowAllDomains({});
  };

  return (
    <section
      id="projects"
      className="scroll-mt-14 sm:scroll-mt-16 section-container section-padding"
    >
      {/* Heading */}
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
        Projects
      </h2>
      <hr className="mt-4 border-border" />

      {/* Domain filter nav */}
      <div
        ref={scrollRef}
        className="mt-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
        role="tablist"
        aria-label="Filter projects by domain"
      >
        {ALL_DOMAINS.map((domain) => (
          <button
            key={domain}
            role="tab"
            aria-selected={activeDomain === domain}
            onClick={() => handleTabChange(domain)}
            className={[
              "flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 focus-ring",
              activeDomain === domain
                ? "bg-accent text-black border-accent shadow-sm"
                : "bg-surface text-muted border-border hover:border-accent hover:text-foreground",
            ].join(" ")}
          >
            {domain}
          </button>
        ))}
      </div>

      {/* Domain groups */}
      <div className="mt-8 flex flex-col gap-10">
        {groups.map(({ label, items }) => {
          if (items.length === 0) return null;
          const isExpanded = !!showAllDomains[label];
          const visible = isExpanded ? items : items.slice(0, MAX_VISIBLE);
          const hasMore = items.length > MAX_VISIBLE;

          return (
            <div key={label}>
              {/* Group label – only shown when "All" is active */}
              {activeDomain === "All" && (
                <h3 className="font-display text-base sm:text-lg font-semibold text-muted mb-3 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                  {label}
                  <span className="text-xs font-normal text-muted/60">
                    ({items.length})
                  </span>
                </h3>
              )}

              {/* Horizontal scrollable row */}
              <div
                className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin"
                role="list"
              >
                {visible.map((project) => (
                  <div
                    key={project.githubUrl}
                    role="listitem"
                    className="flex-shrink-0 w-[min(320px,85vw)] sm:w-80 snap-start"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}

                {/* "Show All" inline card */}
                {hasMore && !isExpanded && (
                  <div className="flex-shrink-0 w-[min(180px,60vw)] sm:w-44 snap-start flex items-center justify-center">
                    <button
                      onClick={() => toggleShowAll(label)}
                      className="focus-ring w-full h-full min-h-[160px] flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border text-muted hover:border-accent hover:text-foreground transition-all duration-200 group"
                      aria-label={`Show all ${label} projects`}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        +{items.length - MAX_VISIBLE}
                      </span>
                      <span className="text-xs font-medium">Show All</span>
                    </button>
                  </div>
                )}
              </div>

              {/* "Show Less" button – shown when expanded */}
              {hasMore && isExpanded && (
                <button
                  onClick={() => toggleShowAll(label)}
                  className="focus-ring mt-2 text-xs text-muted hover:text-foreground border border-border hover:border-accent rounded-full px-4 py-1.5 transition-all duration-200"
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
