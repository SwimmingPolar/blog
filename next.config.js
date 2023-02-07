const nextra = require("nextra");
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
  },
  reactStrictMode: true,
  eslint: {
    // Eslint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
});
