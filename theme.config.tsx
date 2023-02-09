import { Logo } from '@/components'
import { useCurrentLanguage } from '@/hooks'
import { DocsThemeConfig } from 'nextra-theme-docs/.'

const docsRepositoryBase =
  'https://github.com/SwimmingPolar/nextra-portfolio/blob/main'

const config: DocsThemeConfig = {
  // Git repository with the branch name
  docsRepositoryBase,

  // Logo obviously
  logo: <Logo />,

  // Github link the navbar
  project: {
    link: 'https://github.com/SwimmingPolar/nextra-portfolio'
  },

  // Page title
  useNextSeoProps() {
    return {
      titleTemplate: '%s - YDH'
    }
  },

  // i18 configuration
  i18n: [
    {
      locale: 'ko',
      text: '한국어'
    },
    {
      locale: 'en',
      text: 'English'
    }
  ],

  // Go to prev/next navigation at the bottom the page
  navigation: false,

  toc: {
    title: () => {
      const text = useCurrentLanguage({
        ko: '페이지 목차',
        en: 'On This Page'
      })
      return <>{text}</>
    }
  },

  // Sidebar on the page and mobile menu
  sidebar: {
    // Expand all
    defaultMenuCollapseLevel: 3,
    toggleButton: true
  },

  // Feedback button on the sidebar of the page
  feedback: {
    content: ''
  },

  // Edit link on the page
  editLink: {
    component: (props: { className?: string; filePath?: string }) => {
      const text = useCurrentLanguage({
        ko: '수정하기',
        en: 'Edit this page'
      })
      const href = props.filePath
        ? docsRepositoryBase + `/${props?.filePath}`
        : ''
      return (
        <a className={props?.className} href={href} target="_blank">
          {text}
        </a>
      )
    }
  },

  // Search component on the navbar
  search: {
    placeholder: () => {
      return useCurrentLanguage({
        ko: '검색하기...',
        en: 'Search documentation...'
      })
    },
    emptyResult: () => {
      const text = useCurrentLanguage({
        ko: '검색 결과가 없어용',
        en: 'No results found'
      })
      return (
        <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
          {text}
        </span>
      )
    }
  },
  footer: {
    text: '2023 © YDH - 🎉 sometime it just happens'
  }
}

export default config
