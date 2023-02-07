import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  flexSearch: {
    codeblocks: true,
  },
  defaultShowCopyCode: true,
});

export default withNextra({
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
  },
});
