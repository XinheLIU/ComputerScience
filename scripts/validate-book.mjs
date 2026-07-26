import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, extname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const manifestPath = join(projectRoot, '.vitepress', 'book-data.json')
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
const supportedLanguages = new Set(['en', 'zh'])

function markdownFiles(directory) {
  if (!existsSync(directory)) return []
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) return markdownFiles(path)
    return extname(entry.name) === '.md' ? [relative(projectRoot, path)] : []
  })
}

function flattenSections(sections) {
  return sections.flatMap((section) => [
    section,
    ...flattenSections(section.items ?? [])
  ])
}

function languagesForSection(section) {
  return section.languages ?? ['en']
}

const sections = manifest.flatMap((part) =>
  part.chapters.flatMap((chapter) => flattenSections(chapter.sections))
)
const files = [...markdownFiles(join(projectRoot, 'en', 'book')), ...markdownFiles(join(projectRoot, 'zh', 'book'))].sort()
const manifestFiles = sections.flatMap((section) =>
  languagesForSection(section).map((language) => `${language}${section.link}.md`)
).sort()
const sources = sections.map((section) => section.source)
const links = sections.map((section) => section.link)

const duplicateValues = (values) => [...new Set(values.filter((value, index) => values.indexOf(value) !== index))]
const missingFiles = manifestFiles.filter((file) => !existsSync(join(projectRoot, file)))
const unlistedFiles = files.filter((file) => !manifestFiles.includes(file))
const invalidLanguageDeclarations = sections.filter((section) => {
  const languages = languagesForSection(section)
  return languages.length === 0
    || new Set(languages).size !== languages.length
    || languages.some((language) => !supportedLanguages.has(language))
    || (section.legacyLanguage && !languages.includes(section.legacyLanguage))
})
const missingUpdateDates = files.filter((file) => {
  const firstLines = readFileSync(join(projectRoot, file), 'utf8').split('\n').slice(0, 12).join('\n')
  return !/Last updated:\s*\d{4}-\d{2}-\d{2}/.test(firstLines)
})

const errors = []
if (existsSync(join(projectRoot, 'book'))) errors.push('The legacy top-level book/ directory still exists.')
if (duplicateValues(sources).length) errors.push(`Duplicate legacy sources: ${duplicateValues(sources).join(', ')}`)
if (duplicateValues(links).length) errors.push(`Duplicate canonical links: ${duplicateValues(links).join(', ')}`)
if (invalidLanguageDeclarations.length) {
  errors.push(`Invalid language declarations: ${invalidLanguageDeclarations.map((section) => section.link).join(', ')}`)
}
if (missingFiles.length) errors.push(`Missing localized section files: ${missingFiles.join(', ')}`)
if (unlistedFiles.length) errors.push(`Unlisted localized Markdown files: ${unlistedFiles.join(', ')}`)
if (missingUpdateDates.length) errors.push(`Missing Last updated date: ${missingUpdateDates.join(', ')}`)

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}

const englishPages = manifestFiles.filter((file) => file.startsWith('en/')).length
const chinesePages = manifestFiles.filter((file) => file.startsWith('zh/')).length
console.log(`Validated ${sections.length} topics: ${englishPages} English pages and ${chinesePages} Chinese pages.`)
