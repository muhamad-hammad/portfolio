# Portfolio Build — Status

The build is complete. This file is now a short status record plus a pointer to the live ops doc.

---

## What was built

A single-page portfolio targeting AI/ML internships, deployed to Vercel with auto-deploy on push to `main`.

| Area | Status |
|------|--------|
| Next.js 14 App Router scaffold | ✅ Done |
| Light/dark theme system (CSS variables + `next-themes`) | ✅ Done |
| Typed data module ([data/portfolio.ts](data/portfolio.ts)) | ✅ Done |
| Navbar + theme toggle | ✅ Done |
| Hero + Skills sections | ✅ Done |
| Projects section (with `lib/github.ts` helper for future live-repo mode) | ✅ Done |
| Education + Contact sections | ✅ Done |
| Page assembly, metadata, OG image, CV asset | ✅ Done |
| Vercel deployment + push-to-deploy workflow | ✅ Done |

The original phase-by-phase build prompts (`phases/`) have been removed — they were scaffolding for the build, not durable docs.

---

## Where to look now

- **Deploy / redeploy / domain / rollback:** [../implementation_plan.md](../implementation_plan.md)
- **Edit site content:** [data/portfolio.ts](data/portfolio.ts) — single source of truth for hero copy, projects, skills, education, and social links
- **Replace resume:** [public/cv.pdf](public/cv.pdf)
- **Project conventions:** [CLAUDE.md](CLAUDE.md) and [AGENTS.md](AGENTS.md)

---

## Routine update flow

```bash
# edit data/portfolio.ts (or drop a new public/cv.pdf)
git add <files>
git commit -m "<what> so <why>"
git push
# Vercel auto-deploys; live in ~30 seconds
```

Use the maintenance table in [../implementation_plan.md](../implementation_plan.md) for the common edits.
