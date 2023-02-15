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
    remarkPlugins: [
      [remarkCodeHike, { theme, lineNumbers: true, showCopyButton: true }]
    ]
  }
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko'
  },
  eslint: {
    // Eslint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true
  },
  compiler: {
    styledComponents: true
  },
  env: {
    RECAPCHA_SITE_KEY: process.env.RECAPCHA_SITE_KEY || '',
    RECAPCHA_BACKEND_KEY: process.env.RECAPCHA_BACKEND_KEY || '',
    CONTACT: process.env.CONTACT || '',
    FIREBASE_SECRET_KEY: process.env.FIREBASE_SECRET_KEY || ''
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      process.env.WEBSITE_URL = 'ydh.vercel.app'
      require('./modules/generate-sitemap.js')
    }
    return config
  }
})
