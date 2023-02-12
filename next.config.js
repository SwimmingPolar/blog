const { remarkCodeHike } = require('@code-hike/mdx')
const theme = require('shiki/themes/material-palenight.json')
const nextra = require('nextra')

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true,
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme, lineNumbers: true }]]
  }
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko'
  },
  reactStrictMode: true,
  eslint: {
    // Eslint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true
  },
  compiler: {
    styledComponents: true
  }
})
