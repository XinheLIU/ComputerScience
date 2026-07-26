# Computer Science Notes / 计算机科学笔记

Last updated: 2026-07-19

A bilingual, structured computer science book built from the Markdown notes in this repository.

The `EN / 中` control switches and persists the interface language independently from the light/dark appearance control. Source-note language is never rewritten at runtime.

## Read locally

```bash
npm install
npm run docs:dev
```

The development server uses the GitHub Pages base path:
`http://localhost:5173/ComputerScience/`.

## Validate and build

```bash
npm run docs:build
npm run docs:preview
```

The build validates that all 67 sections appear exactly once in the book manifest, checks VitePress links, and emits redirect pages for the notes' former locations.

## Content structure

```text
book/
├── 01-foundations/
├── 02-programming/
├── 03-systems-and-data/
├── 04-design-and-architecture/
└── 05-engineering-practice/
```

Navigation metadata lives in `.vitepress/book-data.json`. Each entry records the section title, its former path, and its canonical book URL. Update that manifest whenever a section is added or moved.

## Deployment

Pushes to `main` deploy through `.github/workflows/deploy.yml`. In the GitHub repository, select **Settings → Pages → Source → GitHub Actions** once before the first deployment.
