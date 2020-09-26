import { IContentDocument } from '@nuxt/content/types/content'
import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  srcDir: 'src/',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '.zezehihi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '新卒フロントエンドエンジニアの技術ブログ',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+JP:wght@400;500&display=swap',
      },
    ],
    htmlAttrs: { lang: 'ja' },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/reset.css', '@/assets/styles/common.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/firebase.client'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/composition-api',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  styleResources: {
    scss: [
      '@/assets/styles/variables/index.scss',
      '@/assets/styles/mixins/index.scss',
    ],
  },

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      plugins: [
        'module:@vue/babel-sugar-v-model',
        '@babel/plugin-transform-runtime',
      ],
      presets: ['babel-preset-vca-jsx', '@vue/cli-plugin-babel/preset'],
    },
  },
  generate: {
    fallback: true,
    interval: 2000,
    async routes() {
      const { $content } = await import('@nuxt/content')
      const files = (await $content({ deep: true })
        .only(['path'])
        .fetch()) as IContentDocument[]

      const routes = files.map((file) => {
        return /\/index$/.test(file.path)
          ? file.path.replace(/\/index$/, '')
          : file.path
      })

      return routes
    },
  },
}

export default config
