import { h } from 'vue'
// import type { Theme } from 'VitePress'

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme' 
import DefaultTheme from 'vitepress/theme-without-fonts'

import './scss/style.scss'
import './fonts/font.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://VitePress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme

