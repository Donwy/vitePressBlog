module.exports = {
    head: [
      [
        'meta',
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        },
      ],
      ['link', { rel: 'icon', href: '/zhushuangban.jpg' }],
    ],
    title: 'vitePress Blog',
    base: '/vitePressBlog/',
    logo: '/zhushuangban.jpg',
    themeConfig: {
      search: true,
      algolia: {
        apiKey: 'search_key',
        indexName: 'search'
      },
      sidebar: [
          {
            text: 'ui',
            children: [
              { text: '介绍', link: '/components/' },
              { text: 'Button', link: '/components/button' },
              { text: 'Layout', link: '/components/layout' },
              { text: 'Chart', link: '/components/chart' }
            ],
          },
          {
            text: 'doc',
            children: [
              { text: '文档', link: '/doc/' },
              { text: '分类', link: '/doc/tags' },
              { text: '关于', link: '/doc/about' }
            ],
          },
        ],
      author: 'Donwy',
      nav: [
        { text: '首页', link: '/' },
        { text: '分类', link: '/doc/tags' },
      ],
    },
    dest: 'public'
  };
  
  