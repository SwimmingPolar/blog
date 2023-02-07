import { DocsThemeConfig } from "nextra-theme-docs/.";

const config: DocsThemeConfig = {
  docsRepositoryBase: "https://github.com/SwimmingPolar/nextra-portfolio",
  logo: (
    <h3>
      <span>YOO DONG HEON</span>
    </h3>
  ),
  project: {
    link: "https://github.com/SwimmingPolar/nextra-portfolio",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - YDH",
    };
  },
  i18n: [
    {
      locale: "ko",
      text: "한국어",
    },
    {
      locale: "en",
      text: "English",
    },
  ],
  navigation: false,
};

export default config;
