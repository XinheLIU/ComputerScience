<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import {
  firstSectionForChapter,
  firstSectionForPart,
  localizedLabel,
  localizedLink,
  sectionForLocalizedPath,
  sectionsForLanguage
} from '../book'
import { useUiLanguage } from './ui-language'

const route = useRoute()
const { language, translate } = useUiLanguage()
const currentSection = computed(() => sectionForLocalizedPath(route.path))
const localeSections = computed(() => sectionsForLanguage(language.value))
const currentPosition = computed(() => {
  if (!currentSection.value) return 0
  return localeSections.value.findIndex((section) => section.link === currentSection.value?.link) + 1
})
const homeLink = computed(() => `/${language.value}/`)
const partLink = computed(() => {
  if (!currentSection.value) return homeLink.value
  const section = firstSectionForPart(currentSection.value.part, language.value)
  return section ? localizedLink(section, language.value) : homeLink.value
})
const chapterLink = computed(() => {
  if (!currentSection.value) return homeLink.value
  const section = firstSectionForChapter(currentSection.value.chapter, language.value)
  return section ? localizedLink(section, language.value) : partLink.value
})
</script>

<template>
  <div v-if="currentSection" class="book-context">
    <nav class="book-breadcrumbs" :aria-label="translate('Breadcrumb', '面包屑导航')">
      <a :href="withBase(homeLink)">{{ translate('Home', '首页') }}</a>
      <span aria-hidden="true">/</span>
      <a :href="withBase(partLink)">
        {{ localizedLabel(currentSection.part.label, language) }}
      </a>
      <span aria-hidden="true">/</span>
      <a :href="withBase(chapterLink)">
        {{ localizedLabel(currentSection.chapter.label, language) }}
      </a>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{{ currentSection.title }}</span>
    </nav>
    <span class="section-position">{{ currentPosition }} / {{ localeSections.length }}</span>
  </div>
</template>
