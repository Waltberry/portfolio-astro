
# Minimalist Portfolio (Astro + Tailwind)

This site pulls your CV sections directly from Markdown. Calm, readable palette with light/dark mode.

## Quick start

```bash
# 1) Open a terminal in this folder
npm create astro@latest -- --template minimal --yes  # optional if starting from scratch
# OR just:
npm install

# 2) Install integrations
npm install -D astro @astrojs/tailwind tailwindcss @tailwindcss/typography postcss autoprefixer prettier

# 3) Run the dev server
npm run dev
```

Place your existing Markdown here:
```
src/content/cv/
  1_ProfessionalSummary.md
  2_CoreSkills.md
  3_Licenses&Certification.md
  4_Education&Awards.md
  5_Experience.md
  6_Projects.md
  7_Job_Simulations.md
```

### Deploy to GitHub Pages

1. Set your `site` in `astro.config.mjs` to `https://YOUR_GITHUB_USERNAME.github.io/REPO_NAME` (or root).
2. Push to GitHub.
3. Enable Pages in repo settings.
4. Use the provided workflow `.github/workflows/deploy.yml` or deploy via Vercel/Netlify.

### Edit palette

See `src/styles/global.css` and `tailwind.config.mjs` to tweak the calm palette and typography.
