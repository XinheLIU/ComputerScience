import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import HomePage from './HomePage.vue'
import LanguageChooser from './LanguageChooser.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('LanguageChooser', LanguageChooser)
  }
}
