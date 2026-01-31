import { defineConfig } from 'vitepress'
// import nav from './theme/configs/nav'
// import sidebar from './theme/configs/sidebar'
// import search from './theme/configs/search'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/wankorean/", // 需要 / 開頭和結尾
  title: "haveawansday",
  description: "20260128 update",

  // 20250611 add ga trcking code 
  head: [
    // <script async src="https://www.googletagmanager.com/gtag/js?id=G-9WBQ7L46QD"></script>
    [
      'script',
      {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=G-9WBQ7L46QD`,
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-9WBQ7L46QD');`,
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'HaveaWansDay',
    logo: {
      light: '/logo_w.png',
      dark: '/logo_b.png',
      alt: 'logo'
    },

    // nav,
    // sidebar,
    // search,

    lastUpdated: true
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },

  rewrites: {
    'pages/(.*)': '(.*)'
  }
})
