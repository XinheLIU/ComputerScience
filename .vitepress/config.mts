import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { firstSectionForLanguage, localizedLink, sidebars } from './book'
import { configureWikiLinks } from './wiki-links'

export default withMermaid(defineConfig({
  lang: 'en-US',
  title: 'Computer Science Notes / 计算机科学笔记',
  titleTemplate: ':title · CS Notes',
  description: 'A structured, bilingual collection of computer science and software engineering notes.',
  base: '/ComputerScience/',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md', 'design-system/**/*.md', 'docs/diagnosis/**/*.md'],
  locales: {
    root: {
      label: 'Language',
      lang: 'en-US',
      title: 'Computer Science Notes / 计算机科学笔记'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Computer Science Notes',
      description: 'A structured collection of computer science and software engineering notes.'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: '计算机科学笔记',
      description: '按知识结构整理的计算机科学与软件工程笔记。'
    }
  },
  sitemap: {
    hostname: 'https://xinheliu.github.io/ComputerScience/'
  },
  head: [
    ['meta', { name: 'theme-color', content: '#0b100d' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/ComputerScience/favicon.svg' }]
  ],
  markdown: {
    lineNumbers: true,
    config: configureWikiLinks
  },
  themeConfig: {
    logo: '/terminal-mark.svg',
    siteTitle: 'CS Notes',
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Book', link: localizedLink(firstSectionForLanguage('en')!, 'en') }
    ],
    sidebar: sidebars,
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XinheLIU/ComputerScience' }
    ],
    footer: {
      message: 'Built as an open learning notebook',
      copyright: 'Content maintained by Xinhe Liu'
    }
  }
}))
