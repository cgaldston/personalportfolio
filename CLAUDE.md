# Portfolio Site — Claude Instructions

## Project
Personal portfolio for Caleb Galdston. Live at **calebgaldston.dev**.

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- next-themes (dark mode default), react-activity-calendar, lucide-react
- Deployed on Vercel (project: cgaldstons-projects/personalportfolio)

## Pushing to GitHub
SSH is not set up. Use HTTPS with the repo-scoped token:
```bash
git remote set-url origin https://cgaldston:YOUR_REPO_TOKEN@github.com/cgaldston/personalportfolio.git
git push
git remote set-url origin https://github.com/cgaldston/personalportfolio.git
```
Token with `repo` scope is stored separately (not committed). Always reset the remote URL after pushing.

## Deploying
```bash
vercel --prod
```

## Key files
- `src/app/globals.css` — all color tokens
- `src/lib/github.ts` — featured projects list + GitHub API calls
- `src/app/page.tsx` — top-level page assembly
- `public/headshot.jpg` — replace with real photo (currently a placeholder)

## Pending
- [ ] Add real headshot at `public/headshot.jpg`
- [ ] Add `GITHUB_TOKEN` to Vercel dashboard env vars (contribution heatmap broken in prod without it)
