import { IContentDocument } from '@nuxt/content/types/content'
import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  srcDir: 'src/',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '.zezehihi',
    meta: [],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Ropa+Sans&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/reset.css', '@/assets/styles/common.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

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

  pwa: {
    meta: {
      name: '.zezehihi',
      author: 'megatkhs',
      description: '新卒フロントエンドエンジニアの技術ブログ',
      theme_color: '#1e446a',
      lang: 'ja',
      ogHost: 'https://zezehihi.dev',
    },
    manifest: {
      name: '.zezehihi',
      short_name: '.zezehihi',
      lang: 'ja',
      description: '新卒フロントエンドエンジニアの技術ブログ',
      theme_color: '#1e446a',
      useWebmanifestExtension: false,
    },
  },

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
  },
}

export default config
