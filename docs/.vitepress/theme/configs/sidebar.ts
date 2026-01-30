import { DefaultTheme } from 'vitepress';

export default {
    '/data/': [
        {
            text: '數據',
            items: [
                { text: 'data1', link: '/data/data1' },
                { text: 'data2', link: '/data/data2' }
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

    // sidebar: {
    //     '/korean/': [
    //         {
    //             text: '韓文學習',
    //             items: [
    //                 { text: '1. test1', link: '/korean/test1' },
    //                 { text: '2. test2', link: '/korean/test2' },
    //                 { text: '3. test3', link: '/korean/test3' },
    //                 { text: '學習資源', items: [
    //                   { text: '下載', link: '/korean/K0003_korean_learning_resources_download' }
    //                 ]}
    //             ]
    //         }
    //     ],
    //     '/others/': [
    //         {
    //             text: '其他',
    //             items: [
    //                 { text: 'othertest1', link: '/others/othertest1' },
    //                 { text: 'othertest2', link: '/others/othertest2' }
    //             ]
    //         }
    //     ]
    // }
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
} as DefaultTheme.Sidebar;
