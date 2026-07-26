import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, extname, join, parse, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = join(projectRoot, '.vitepress', 'dist')
const manifest = JSON.parse(readFileSync(join(projectRoot, '.vitepress', 'book-data.json'), 'utf8'))

function flattenSections(sections) {
  return sections.flatMap((section) => [
    section,
    ...flattenSections(section.items ?? [])
  ])
}

const sections = manifest.flatMap((part) =>
  part.chapters.flatMap((chapter) => flattenSections(chapter.sections))
)
const base = '/ComputerScience'

function legacyOutputs(source) {
  const parsed = parse(source)
  const stem = source.slice(0, -extname(source).length)
  const outputs = source === 'Linux.md'
    ? [`${stem}.html`]
    : [`${stem}.html`, join(stem, 'index.html')]

  if (parsed.name.toLocaleLowerCase() === 'readme' && parsed.dir) {
    outputs.push(join(parsed.dir, 'index.html'))
  }

  return outputs
}

function canonicalOutputs(link) {
  const path = link.replace(/^\//, '')
  return [`${path}.html`, join(path, 'index.html')]
}

function redirectDocument(target, language) {
  const escapedTarget = JSON.stringify(target)
  const continueText = language === 'zh' ? '继续阅读' : 'Continue to the new page'
  return `<!doctype html>
<html lang="${language === 'zh' ? 'zh-CN' : 'en'}">
  <head>
    <meta charset="utf-8">
    <meta name="book-redirect" content="legacy-path">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="refresh" content="0;url=${target}">
    <link rel="canonical" href="https://xinheliu.github.io${target}">
    <title>Moved · Computer Science Notes</title>
    <script>location.replace(${escapedTarget} + location.search + location.hash)</script>
  </head>
  <body><a href="${target}">${continueText}</a></body>
</html>
`
}

let redirectCount = 0
const claimedOutputs = new Map()

for (const section of sections) {
  const languages = section.languages ?? ['en']
  const legacyLanguage = section.legacyLanguage ?? languages[0]
  const target = `${base}/${legacyLanguage}${section.link}`
  const outputs = [...new Set([...canonicalOutputs(section.link), ...legacyOutputs(section.source)])]

  for (const output of outputs) {
    const previousTarget = claimedOutputs.get(output)
    if (previousTarget && previousTarget !== target) {
      throw new Error(`Redirect collision for ${output}: ${previousTarget} and ${target}`)
    }
    claimedOutputs.set(output, target)

    const outputPath = join(distRoot, output)
    if (existsSync(outputPath)) {
      const existingContent = readFileSync(outputPath, 'utf8')
      const isGeneratedRedirect = existingContent.includes('name="book-redirect"')
        || existingContent.includes('<title>Moved · Computer Science Notes</title>')
      if (!isGeneratedRedirect) {
        throw new Error(`Redirect would overwrite a generated page: ${output}`)
      }
    }
    mkdirSync(dirname(outputPath), { recursive: true })
    writeFileSync(outputPath, redirectDocument(target, legacyLanguage))
    redirectCount += 1
  }
}

console.log(`Generated ${redirectCount} legacy redirect files.`)
