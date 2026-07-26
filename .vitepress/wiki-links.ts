import type MarkdownIt from 'markdown-it'
import { hasLanguage, localizedLink, sections, type UiLanguage } from './book'

function normalizedAlias(value: string): string {
  return value.trim().toLocaleLowerCase()
}

function sourceBasename(source: string): string {
  const basename = source.split('/').at(-1) ?? source
  return basename.replace(/\.md$/i, '')
}

function languageFromEnvironment(environment: { relativePath?: string }): UiLanguage {
  return environment.relativePath?.startsWith('zh/') ? 'zh' : 'en'
}

function linksForLanguage(language: UiLanguage): Map<string, string> {
  const linksByAlias = new Map<string, string>()

  for (const section of sections) {
    if (!hasLanguage(section, language)) continue

    linksByAlias.set(normalizedAlias(section.title), localizedLink(section, language))
    if (sourceBasename(section.source).toLocaleLowerCase() !== 'readme') {
      linksByAlias.set(normalizedAlias(sourceBasename(section.source)), localizedLink(section, language))
    }
  }

  return linksByAlias
}

const linksByLanguage = {
  en: linksForLanguage('en'),
  zh: linksForLanguage('zh')
}

export function configureWikiLinks(markdown: MarkdownIt): void {
  markdown.inline.ruler.before('emphasis', 'obsidian-wiki-link', (state, silent) => {
    const isEmbed = state.src.startsWith('![[', state.pos)
    const isLink = state.src.startsWith('[[', state.pos)
    if (!isEmbed && !isLink) return false

    const openingLength = isEmbed ? 3 : 2
    const closingPosition = state.src.indexOf(']]', state.pos + openingLength)
    if (closingPosition === -1) return false
    if (silent) return true

    const rawTarget = state.src.slice(state.pos + openingLength, closingPosition).trim()
    const [target, customLabel] = rawTarget.split('|', 2)
    const label = customLabel?.trim() || target.trim()

    if (isEmbed) {
      const token = state.push('html_inline', '', 0)
      token.content = `<span class="unresolved-embed" role="note">Missing referenced image: ${markdown.utils.escapeHtml(label)}</span>`
    } else {
      const language = languageFromEnvironment(state.env)
      const link = linksByLanguage[language].get(normalizedAlias(target))
      if (link) {
        const openToken = state.push('link_open', 'a', 1)
        openToken.attrSet('href', link)
        const textToken = state.push('text', '', 0)
        textToken.content = label
        state.push('link_close', 'a', -1)
      } else {
        const token = state.push('html_inline', '', 0)
        token.content = `<span class="wiki-reference">${markdown.utils.escapeHtml(label)}</span>`
      }
    }

    state.pos = closingPosition + 2
    return true
  })
}
