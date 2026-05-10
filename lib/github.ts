import type { Project } from "@/data/portfolio";

type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  fork: boolean;
  archived: boolean;
  private: boolean;
  language: string | null;
  topics: string[];
  pushed_at: string;
};

const GITHUB_USERNAME = "muhammad-hammad";

export async function getPublicRepos(): Promise<Project[]> {
  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed&direction=desc`;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(url, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error(`GitHub API ${res.status}: ${await res.text()}`);
    return [];
  }

  const repos = (await res.json()) as GitHubRepo[];

  return repos
    .filter((r) => !r.fork && !r.private && !r.archived)
    .map((r) => {
      const tags = [...r.topics];
      if (r.language && !tags.includes(r.language)) {
        tags.unshift(r.language);
      }
      return {
        title: r.name,
        description: r.description ?? "No description.",
        tags: tags.slice(0, 6),
        githubUrl: r.html_url,
        liveUrl: r.homepage && r.homepage.trim() !== "" ? r.homepage : null,
        featured: false,
        domain: "",
      };
    });
}
