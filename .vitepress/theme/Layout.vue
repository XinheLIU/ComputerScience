<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import BookBreadcrumbs from './BookBreadcrumbs.vue'
import LanguageSwitch from './LanguageSwitch.vue'

const DefaultLayout = DefaultTheme.Layout
</script>

<template>
  <DefaultLayout>
    <template #nav-bar-content-after>
      <LanguageSwitch />
    </template>
    <template #doc-before>
      <BookBreadcrumbs />
    </template>
  </DefaultLayout>
</template>
