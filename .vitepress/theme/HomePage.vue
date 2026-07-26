<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import {
  bookForLanguage,
  firstSectionForLanguage,
  firstSectionForPart,
  localizedLabel,
  localizedLink,
  sectionCountForPart,
  sectionsForLanguage,
  type BookPart
} from '../book'
import { useUiLanguage } from './ui-language'

const { language, translate } = useUiLanguage()
const localizedBook = computed(() => bookForLanguage(language.value))
const localizedSections = computed(() => sectionsForLanguage(language.value))
const chapterCount = computed(() => localizedBook.value.reduce((total, part) => total + part.chapters.length, 0))
const firstSection = computed(() => firstSectionForLanguage(language.value))

function partLink(part: BookPart): string {
  const section = firstSectionForPart(part, language.value)
  return section ? localizedLink(section, language.value) : `/${language.value}/`
}

function partSectionCount(part: BookPart): number {
  return sectionCountForPart(part, language.value)
}

function openSearch(): void {
  const searchButton = document.querySelector<HTMLButtonElement>(
    '.VPNavBarSearch button, .DocSearch-Button, button[aria-label*="Search"]'
  )
  searchButton?.click()
}
</script>

<template>
  <main class="book-home">
    <section class="home-hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="terminal-overline">
          <span aria-hidden="true">&gt;</span>
          {{ translate('learn --from fundamentals', '学习 --从 基础') }}
        </p>
        <h1 id="home-title">{{ translate('Computer Science Notes', '计算机科学笔记') }}</h1>
        <p class="hero-summary">
          {{ translate(
            'A structured path through computing foundations, programming, systems, architecture, and engineering practice.',
            '从计算基础到工程实践，沿着清晰路径整理的计算机科学学习笔记。'
          ) }}
        </p>
        <div class="hero-actions">
          <a v-if="firstSection" class="primary-action" :href="withBase(localizedLink(firstSection, language))">
            {{ translate('Start reading', '开始阅读') }}
          </a>
          <button class="search-action" type="button" @click="openSearch">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2" />
              <path d="m16.5 16.5 4 4" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>
            {{ translate('Search notes', '搜索笔记') }}
            <kbd>⌘ K</kbd>
          </button>
        </div>
      </div>

      <aside class="hero-index" :aria-label="translate('Book index summary', '全书概览')">
        <div class="index-header">
          <span>{{ translate('BOOK_INDEX', '全书索引') }}</span>
          <span class="status-dot">{{ translate('ONLINE', '在线') }}</span>
        </div>
        <dl>
          <div><dt>{{ translate('Parts', '部分') }}</dt><dd>{{ localizedBook.length.toString().padStart(2, '0') }}</dd></div>
          <div><dt>{{ translate('Chapters', '章节') }}</dt><dd>{{ chapterCount.toString().padStart(2, '0') }}</dd></div>
          <div><dt>{{ translate('Sections', '小节') }}</dt><dd>{{ localizedSections.length.toString().padStart(2, '0') }}</dd></div>
          <div><dt>{{ translate('Modes', '模式') }}</dt><dd>{{ translate('LIGHT / DARK', '浅色 / 深色') }}</dd></div>
        </dl>
      </aside>
    </section>

    <section class="parts-section" aria-labelledby="parts-title">
      <div class="section-heading">
        <p class="terminal-overline">{{ translate('CURRICULUM_MAP', '课程地图') }}</p>
        <h2 id="parts-title">{{ translate('Five parts, one continuous path.', '按现有内容持续完善的学习路径。') }}</h2>
        <p>{{ translate('Build knowledge in sequence.', '循序构建完整知识体系。') }}</p>
      </div>

      <ol class="part-list">
        <li v-for="part in localizedBook" :key="part.id">
          <a :href="withBase(partLink(part))">
            <span class="part-number">{{ translate('PART', '部分') }}_{{ part.number }}</span>
            <span class="part-title">{{ localizedLabel(part.label, language) }}</span>
            <span class="part-meta">
              {{ part.chapters.length }} {{ translate('chapters', '章') }} ·
              {{ partSectionCount(part) }} {{ translate('sections', '节') }}
            </span>
            <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
              <path d="M5 12h14m-5-5 5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" />
            </svg>
          </a>
        </li>
      </ol>
    </section>
  </main>
</template>
