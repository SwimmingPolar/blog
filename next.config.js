/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;

const nextra = require("nextra");
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});
module.exports = withNextra({
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
  },
});
