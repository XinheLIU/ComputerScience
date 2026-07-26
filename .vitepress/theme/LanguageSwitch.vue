<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute, withBase } from 'vitepress'
import {
  bookForLanguage,
  firstSectionForLanguage,
  hasLanguage,
  localizedLabel,
  localizedLink,
  sectionForLocalizedPath,
  type UiLanguage
} from '../book'
import { useUiLanguage } from './ui-language'

const route = useRoute()
const { language, translate } = useUiLanguage()
let observer: MutationObserver | undefined
let translationQueued = false

const currentSection = computed(() => sectionForLocalizedPath(route.path))
const targetLanguage = computed<UiLanguage>(() => language.value === 'en' ? 'zh' : 'en')
const targetLink = computed(() => {
  const section = currentSection.value
  if (section) {
    return hasLanguage(section, targetLanguage.value)
      ? localizedLink(section, targetLanguage.value)
      : undefined
  }
  return `/${targetLanguage.value}/`
})
const switchTitle = computed(() => {
  if (!targetLink.value) {
    return targetLanguage.value === 'zh'
      ? 'Chinese translation unavailable'
      : '英文翻译暂不可用'
  }
  return targetLanguage.value === 'zh' ? '切换到中文' : 'Switch to English'
})

function replaceText(element: Element | null, value: string): void {
  if (element && element.textContent?.trim() !== value) element.textContent = value
}

function replaceAttribute(element: Element | null, name: string, value: string): void {
  if (element?.getAttribute(name) !== value) element?.setAttribute(name, value)
}

function translateChrome(): void {
  const currentLanguage = language.value
  const localizedBook = bookForLanguage(currentLanguage)
  const chapters = localizedBook.flatMap((part) => part.chapters)
  const firstSection = firstSectionForLanguage(currentLanguage)

  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en-US'
  document.documentElement.dataset.uiLanguage = currentLanguage

  document.querySelectorAll('.VPSidebarItem.level-0 > .item > .text').forEach((element, index) => {
    const part = localizedBook[index]
    if (part) replaceText(element, `${part.number} · ${localizedLabel(part.label, currentLanguage)}`)
  })
  document.querySelectorAll('.VPSidebarItem.level-1 > .item > .text').forEach((element, index) => {
    const chapter = chapters[index]
    if (chapter) replaceText(element, localizedLabel(chapter.label, currentLanguage))
  })

  document.querySelectorAll<HTMLAnchorElement>('.VPNavBarMenuLink, .VPNavScreenMenuLink').forEach((link) => {
    const path = new URL(link.href, window.location.href).pathname
    if (/\/(?:en|zh)\/?$/.test(path)) {
      replaceText(link, translate('Home', '首页'))
      replaceAttribute(link, 'href', withBase(`/${currentLanguage}/`))
    }
    if (path.includes('/book/01-foundations/01-orientation/programming') && firstSection) {
      replaceText(link, translate('Book', '阅读'))
      replaceAttribute(link, 'href', withBase(localizedLink(firstSection, currentLanguage)))
    }
  })

  replaceText(document.querySelector('.VPNavBarTitle .title span'), translate('CS Notes', '计算机笔记'))
  replaceText(document.querySelector('.VPDocAsideOutline .outline-title'), translate('On this page', '本页目录'))
  replaceText(document.querySelector('.VPLocalNavOutlineDropdown .menu-text'), translate('On this page', '本页目录'))
  replaceText(document.querySelector('.VPDocFooter .pager-link.prev .desc'), translate('Previous', '上一节'))
  replaceText(document.querySelector('.VPDocFooter .pager-link.next .desc'), translate('Next', '下一节'))
  replaceText(document.querySelector('.VPLastUpdated .prefix'), translate('Last updated', '最后更新'))
  replaceText(document.querySelector('.VPFooter .message'), translate('Built as an open learning notebook', '开放学习笔记'))
  replaceText(document.querySelector('.VPFooter .copyright'), translate('Content maintained by Xinhe Liu', '内容维护：Xinhe Liu'))
  replaceText(document.querySelector('.VPNavScreenAppearance .text'), translate('Appearance', '外观'))

  const searchLabel = translate('Search', '搜索')
  document.querySelectorAll('button[aria-label="Search"], button[aria-label="搜索"]').forEach((button) => {
    replaceAttribute(button, 'aria-label', searchLabel)
  })
  replaceText(document.querySelector('.DocSearch-Button-Placeholder'), searchLabel)
  document.querySelectorAll<HTMLInputElement>('.VPLocalSearchBox input').forEach((input) => {
    input.placeholder = translate('Search documentation', '搜索文档')
  })

  replaceAttribute(
    document.querySelector('button[aria-label="mobile navigation"], button[aria-label="移动导航"]'),
    'aria-label',
    translate('mobile navigation', '移动导航')
  )
}

function queueChromeTranslation(): void {
  if (translationQueued) return
  translationQueued = true
  queueMicrotask(() => {
    translationQueued = false
    translateChrome()
  })
}

function changeLanguage(): void {
  if (targetLink.value) window.location.assign(withBase(targetLink.value))
}

watch(() => route.path, () => nextTick(translateChrome))

onMounted(() => {
  translateChrome()
  observer = new MutationObserver(queueChromeTranslation)
  observer.observe(document.body, { childList: true, subtree: true })
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <button
    class="language-switch"
    type="button"
    :disabled="!targetLink"
    :aria-label="switchTitle"
    :title="switchTitle"
    @click="changeLanguage"
  >
    <span :class="{ active: language === 'en' }">EN</span>
    <span aria-hidden="true">/</span>
    <span :class="{ active: language === 'zh' }">中</span>
  </button>
</template>
