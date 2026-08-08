# Language Separation Diagnosis

Last updated: 2026-07-21

## Result

The note corpus is now separated by route and filesystem location:

```text
en/book/...  # English notes
zh/book/...  # Chinese notes
```

The shared root contains the language chooser, build configuration, public assets, repository documentation, and this report. No note remains under the former top-level `book/` directory.

| Part | Logical topics | English pages | Chinese pages |
| --- | ---: | ---: | ---: |
| Foundations | 7 | 6 | 3 |
| Programming | 6 | 6 | 0 |
| Systems and Data | 19 | 17 | 3 |
| Design and Architecture | 23 | 23 | 0 |
| Engineering Practice | 18 | 15 | 3 |
| **Total** | **73** | **67** | **9** |

Three topics have content in both locale trees:

- `computer-systems`
- `software`
- `linux-debugging`

Six topics currently exist only in Chinese:

- `hardware`
- `operating-systems`
- `networks`
- `git-work-manner`
- `programming-tools`
- `programming-tools-map`

The other 64 topics exist only in English. Therefore 64 Chinese translations and 6 English translations remain to be written. `.vitepress/book-data.json` is the machine-readable translation inventory: a missing locale is absent from a topic's `languages` array, and English-only topics omit the array because English is the default.

## Separation Rules

- Authored English and Chinese prose was placed in its matching locale tree.
- Mixed prose in Computer Systems, Software, and Linux Debugging was split without translating or rewriting it.
- Code, commands, identifiers, proper names, quoted titles, and bibliography entries remain verbatim even when they contain another script.
- No placeholder translation pages were created.
- A topic's language switch is disabled when its counterpart does not exist.

Residual Chinese text in English pages is limited to those exemptions:

- Java, Cursor, and Front-end Tools: source and course titles.
- DML/DCL, HQL, SQL, and Design Patterns — Comprehensive: code comments, arguments, and example data.

## Routing and Compatibility

- `/` is a neutral English/中文 chooser.
- Locale homes are `/en/` and `/zh/`.
- Note routes are `/en/book/...` and `/zh/book/...`.
- Existing `/book/...` and legacy source URLs redirect to the language containing the original content.
- For the three split topics, legacy URLs default to English.
- Sidebars, breadcrumbs, homepage counts, wiki links, and previous/next navigation use only pages available in the active locale.

## Known Issues Left Unchanged

- Programming Tools and Programming Tools Map contain identical content. They remain separate because deduplication is unrelated to language separation.
- Linux Debugging repeats its Debugger, Debugging Techniques, Code Testing, and Static Analysis sections. The split preserves that source duplication.
- Existing spelling, formatting, incomplete references, and unresolved embedded screenshots were not rewritten.

## Adding a Translation

1. Create the translated Markdown file at the same path under the other locale tree.
2. Add that locale to the topic's `languages` array in `.vitepress/book-data.json`.
3. Add `Last updated: YYYY-MM-DD` near the top of the translated file.
4. Run `npm run docs:build`; validation rejects missing, unlisted, duplicated, or undated localized files.

## Verification

`npm run docs:build` passes with 73 logical topics, 67 English pages, 9 Chinese pages, and 294 generated compatibility redirects.

Representative redirects were checked:

- Git → English
- Networks → Chinese
- Software → English
