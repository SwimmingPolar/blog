import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs/.";

const docsRepositoryBase =
  "https://github.com/SwimmingPolar/nextra-portfolio/blob/main";

const config: DocsThemeConfig = {
  // Git repository with the branch name
  docsRepositoryBase,

  // Logo obviously
  logo: (
    <h3>
      <span>YOO DONG HEON</span>
    </h3>
  ),

  // Github link the navbar
  project: {
    link: "https://github.com/SwimmingPolar/nextra-portfolio",
  },

  // Page title
  useNextSeoProps() {
    return {
      titleTemplate: "%s - YDH",
    };
  },

  // i18 configuration
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

  // Go to prev/next navigation at the bottom the page
  navigation: false,

  // Sidebar on the page and mobile menu
  sidebar: {
    // Expand all
    defaultMenuCollapseLevel: 3,
  },

  // Feedback button on the sidebar of the page
  feedback: {
    content: "",
  },

  editLink: {
    component: (props: { className?: string; filePath?: string }) => {
      const router = useRouter();
      const text = router.locale === "ko" ? "수정하기" : "Edit this page";
      const href = props.filePath
        ? docsRepositoryBase + `/${props?.filePath}`
        : "";
      return (
        <>
          <a className={props?.className} href={href} target="_blank">
            {text}
          </a>
        </>
      );
    },
  },
};

export default config;
