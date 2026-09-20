/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: ['dist', 'node_modules', '*.mjs'],
  rules: {
    'vue/multi-word-component-names': 'off'
  },
  overrides: [
    {
      files: ['scripts/**/*.js', 'vite.config.*.ts', 'vite.config.ts'],
      env: {
        node: true
      }
    }
  ]
}
