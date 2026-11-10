import DefaultTheme from 'vitepress/theme'
import { enhanceMermaid } from 'vitepress-plugin-mermaid-viewer/client'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    enhanceMermaid(app)
  }
}
