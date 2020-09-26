module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    // ここを変更
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
}
