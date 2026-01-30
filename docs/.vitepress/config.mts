import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/wantest/", // 需要 / 開頭和結尾
  title: "wanwan test",
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
    siteTitle: 'WanTest',
    logo: {
      light: '/logo_w.png',
      dark: '/logo_b.png',
      alt: 'logo'
    },

    nav: [
      // { text: 'Home', link: '/' },
      { text: 'wankorea', link: '/korean/K0003_korean_learning_resources_download' }
    ],

    // sidebar: [
    //   // {
    //   //   text: 'Product',
    //   //   collapsed: false,
    //   //   items: [
    //   //     { text: 'memo', link: '/memo' },
    //   //     { text: 'fx2_overview', link: '/fx2_overview' },
    //   //     { text: 'spark_overview', link: '/spark_overview' },
    //   //     { text: 'new_infra_using_time_overview', link: '/new_infra_using_time_overview' }
    //   //   ]
    //   // },
    //   // {
    //   //   text: 'n8n',
    //   //   items: [
    //   //     { text: 'memo', link: '/memo' },
    //   //     { text: 'fx2_overview', link: '/fx2_overview' },
    //   //     { text: 'spark_overview', link: '/spark_overview' },
    //   //     { text: 'new_infra_using_time_overview', link: '/new_infra_using_time_overview' }
    //   //   ]
    //   // },
    //   {
    //     text: 'Korean',
    //     collapsed: false,
    //     items: [
    //       // { text: 'learning_memo', link: '/K0001_korean_learning_memo' },
    //       // { text: 'learning_resource', link: '/K0002_korean_learning_resource' },
    //       { text: 'learning_resource_download', link: '/korean/K0003_korean_learning_resources_download' },
    //     ]
    //   },
    //   {
    //     text: 'others',
    //     items: [ ]
    //   }
    // ],

    sidebar: {
        '/data/': [
            {
                text: '數據',
                items: [
                    { text: 'othertest1', link: '/data/data1' },
                    { text: 'othertest2', link: '/data/data2' }
                ]
            }
        ],
        '/korean/': [
            {
                text: '韓文學習',
                items: [
                    { text: '1. test1', link: '/korean/test1' },
                    { text: '2. test2', link: '/korean/test2' },
                    { text: '3. test3', link: '/korean/test3' },
                    { text: '學習資源', items: [
                      { text: '下載', link: '/korean/K0003_korean_learning_resources_download' }
                    ]}
                ]
            }
        ],
        '/others/': [
            {
                text: '其他',
                items: [
                    { text: 'othertest1', link: '/others/othertest1' },
                    { text: 'othertest2', link: '/others/othertest2' }
                ]
            }
        ]
    },

    lastUpdated: true
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },

  rewrites: {
    'pages/(.*)': '(.*)'
  }
})
