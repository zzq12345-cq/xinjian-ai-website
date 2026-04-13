// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],

  css: [
    '~/assets/css/variables.css',
    '~/assets/css/global.css',
    '~/assets/css/animations.css',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: '心鉴智能科技工作室 - AI心音检测，守护家庭心脏健康',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '心鉴智能科技工作室致力于AI心音检测技术研发，旗下产品「心音智鉴」通过树莓派边缘设备+微信小程序，为家庭用户提供便捷的心脏健康自检服务。',
        },
        { name: 'theme-color', content: '#0891B2' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '心鉴智能科技工作室' },
        {
          property: 'og:description',
          content: '用AI守护每一次心跳 - 家庭级心音检测系统',
        },
        { property: 'og:image', content: '/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  i18n: {
    locales: [
      { code: 'zh', name: '中文', file: 'zh-CN.json' },
      { code: 'en', name: 'English', file: 'en-US.json' },
    ],
    defaultLocale: 'zh',
    langDir: 'locales',
    strategy: 'prefix_except_default',
  },

  image: {
    quality: 80,
    format: ['webp', 'png', 'jpg'],
  },
})
