import { computed } from 'vue'
import { useRoute } from 'vitepress'
import type { UiLanguage } from '../book'

export function languageFromPath(path: string): UiLanguage {
  return path === '/zh' || path.startsWith('/zh/') ? 'zh' : 'en'
}

export function useUiLanguage() {
  const route = useRoute()
  const language = computed(() => languageFromPath(route.path))

  return {
    language,
    translate: (english: string, chinese: string) => language.value === 'en' ? english : chinese
  }
}
