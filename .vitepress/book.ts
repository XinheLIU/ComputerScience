import type { DefaultTheme } from 'vitepress'
import bookData from './book-data.json'

export type UiLanguage = 'en' | 'zh'

export interface BookSection {
  title: string
  source: string
  link: string
  languages?: UiLanguage[]
  legacyLanguage?: UiLanguage
  items?: BookSection[]
}

export interface BookChapter {
  id: string
  label: string
  sections: BookSection[]
}

export interface BookPart {
  id: string
  label: string
  number: string
  chapters: BookChapter[]
}

export interface LocatedSection extends BookSection {
  part: BookPart
  chapter: BookChapter
  position: number
}

export const book = bookData as BookPart[]

export function localizedLabel(label: string, language: UiLanguage): string {
  const separatorPosition = label.lastIndexOf(' / ')
  if (separatorPosition === -1) return label

  return language === 'en'
    ? label.slice(0, separatorPosition)
    : label.slice(separatorPosition + 3)
}

export function languagesForSection(section: BookSection): UiLanguage[] {
  return section.languages ?? ['en']
}

export function hasLanguage(section: BookSection, language: UiLanguage): boolean {
  return languagesForSection(section).includes(language)
}

export function localizedLink(section: BookSection, language: UiLanguage): string {
  return `/${language}${section.link}`
}

function flattenSections(sectionList: BookSection[]): BookSection[] {
  return sectionList.flatMap((section) => [
    section,
    ...flattenSections(section.items ?? [])
  ])
}

function filterSections(sectionList: BookSection[], language: UiLanguage): BookSection[] {
  return sectionList.flatMap((section) => {
    const items = filterSections(section.items ?? [], language)
    if (!hasLanguage(section, language) && items.length === 0) return []

    return [{
      ...section,
      ...(items.length > 0 ? { items } : { items: undefined })
    }]
  })
}

export function bookForLanguage(language: UiLanguage): BookPart[] {
  return book.flatMap((part) => {
    const chapters = part.chapters.flatMap((chapter) => {
      const sections = filterSections(chapter.sections, language)
      return sections.length > 0 ? [{ ...chapter, sections }] : []
    })
    return chapters.length > 0 ? [{ ...part, chapters }] : []
  })
}

export const sections: LocatedSection[] = book.flatMap((part) =>
  part.chapters.flatMap((chapter) =>
    flattenSections(chapter.sections).map((section) => ({
      ...section,
      part,
      chapter,
      position: 0
    }))
  )
).map((section, position) => ({ ...section, position }))

export function sectionsForLanguage(language: UiLanguage): LocatedSection[] {
  return sections
    .filter((section) => hasLanguage(section, language))
    .map((section, position) => ({ ...section, position }))
}

export function sectionCountForPart(part: BookPart, language: UiLanguage): number {
  return part.chapters.reduce(
    (count, chapter) => count + flattenSections(chapter.sections).filter((section) => hasLanguage(section, language)).length,
    0
  )
}

export function firstSectionForChapter(chapter: BookChapter, language: UiLanguage): BookSection | undefined {
  return flattenSections(chapter.sections).find((section) => hasLanguage(section, language))
}

export function firstSectionForPart(part: BookPart, language: UiLanguage): BookSection | undefined {
  return part.chapters
    .flatMap((chapter) => flattenSections(chapter.sections))
    .find((section) => hasLanguage(section, language))
}

export function firstSectionForLanguage(language: UiLanguage): LocatedSection | undefined {
  return sectionsForLanguage(language)[0]
}

const sectionByCanonicalLink = new Map(sections.map((section) => [section.link, section]))

export function sectionForLocalizedPath(path: string): LocatedSection | undefined {
  const normalizedPath = path.replace(/\.html$/, '').replace(/\/$/, '')
  const match = normalizedPath.match(/^\/(?:en|zh)(\/book\/.*)$/)
  return match ? sectionByCanonicalLink.get(match[1]) : undefined
}

function sidebarSections(sectionList: BookSection[], language: UiLanguage): DefaultTheme.SidebarItem[] {
  return sectionList.map((section) => ({
    text: section.title,
    ...(hasLanguage(section, language) ? { link: localizedLink(section, language) } : {}),
    ...(section.items
      ? { collapsed: true, items: sidebarSections(section.items, language) }
      : {})
  }))
}

export function sidebarForLanguage(language: UiLanguage): DefaultTheme.SidebarItem[] {
  return bookForLanguage(language).map((part) => ({
    text: `${part.number} · ${localizedLabel(part.label, language)}`,
    collapsed: false,
    items: part.chapters.map((chapter) => ({
      text: localizedLabel(chapter.label, language),
      collapsed: true,
      items: sidebarSections(chapter.sections, language)
    }))
  }))
}

export const sidebars: DefaultTheme.SidebarMulti = {
  '/en/': sidebarForLanguage('en'),
  '/zh/': sidebarForLanguage('zh')
}
