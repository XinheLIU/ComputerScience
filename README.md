# Computer Science Notes / 计算机科学笔记

Last updated: 2026-08-08

A bilingual, structured computer science book organized as a progression map — from student to independent engineer/scientist. The book follows the 吴军五级工程师 (Wu Jun's 5-level engineer) framework and 计算之魂 (Soul of Computing) depth principle.

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

The build validates that all sections appear exactly once in the book manifest, checks VitePress links, and emits redirect pages for the notes' former locations.

## Content structure

The book has three progressive stages plus optional Web extension packs for the SE track. All existing reference notes remain accessible under Part R.

```text
book/
├── stage-1-foundations/     # Ch 1–10   · L5 → L4
│   ├── ch01–ch03            # Computational Thinking
│   ├── ch04–ch05            # Math Foundations (probability, linear algebra)
│   ├── ch06–ch08            # Systems Thinking (programs, OS, data structures)
│   └── ch09–ch10            # Engineering Practice (code quality, toolchain)
├── stage-2-advanced/        # Ch 11–20  · L4 → L3
│   ├── ch11–ch12            # Computational Thinking (algorithms, type systems)
│   ├── ch13–ch14            # Math & AI (ML essence, neural networks)
│   ├── ch15–ch17            # Systems Thinking (networks, concurrency, databases)
│   └── ch18–ch20            # Engineering Practice (architecture, security, testing)
├── stage-3-expert/          # Ch 21–31  · L3 → L2
│   ├── ch21–ch22            # Computational Thinking (complexity, information theory)
│   ├── ch23–ch25            # AI Depth (deep learning, LLMs, AI engineering)
│   ├── ch26–ch27            # Systems Thinking (distributed systems, performance)
│   ├── ch28–ch29            # Engineering Practice (system design, tech selection)
│   └── ch30–ch31            # Closing (learning methods, next steps)
├── web-extensions/          # Optional SE-track extension packs (W1–W3)
└── [reference notes]        # Original detailed notes — paths unchanged
    ├── 01-foundations/
    ├── 02-programming/
    ├── 03-systems-and-data/
    ├── 04-design-and-architecture/
    └── 05-engineering-practice/
```

### Three learning paths

| Path | Chapters | Target |
|------|----------|--------|
| Traditional SE | Ch 1–10, 11–12, 15–20, 26–29 + Web Ext | Full-stack / backend engineer |
| AI Engineer | All 31 chapters | Complete AI-era toolkit |
| CS Research | Ch 1–5, 11–14, 21–22 + selective | Theory-first depth |

### Adding content

Navigation metadata lives in `.vitepress/book-data.json`. Each entry records the section title and its canonical book URL. Update that manifest whenever a section is added or moved. New chapter files go in the appropriate `stage-N-*` directory and follow the template in [`docs/plans/book-idea.md`](docs/plans/book-idea.md).

## Deployment

Pushes to `main` deploy through `.github/workflows/deploy.yml`. In the GitHub repository, select **Settings → Pages → Source → GitHub Actions** once before the first deployment.
