import { Logo } from '@/components'
import { useCurrentLanguage } from '@/hooks'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const docsRepositoryBase =
  'https://github.com/SwimmingPolar/nextra-portfolio/blob/main'

const config: DocsThemeConfig = {
  // Git repository with the branch name
  docsRepositoryBase,

  // Logo obviously
  logo: <Logo />,

  // Github link the navbar
  project: {
    link: 'https://github.com/SwimmingPolar'
  },

  // Reset the head
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const url =
      'https://ydh.vercel.app' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    const canonicalLocale = locale === 'ko' ? 'ko_KR' : 'en_US'

    const {
      frontMatter: { title, description, keywords }
    } = useConfig()

    return (
      <>
        {/* General */}
        <meta property="keywords" content={keywords ?? ''} />
        {/* Open Graph */}
        {title && <meta property="og:title" content={title} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="YDH" />
        <meta property="og:locale" content={canonicalLocale} />
        {/* Twitter */}
        {title && <meta property="twitter:title" content={title} />}
        {description && (
          <meta property="twitter:description" content={description} />
        )}
        <meta property="twitter:url" content={url} />
        <meta property="twitter:card" content="summary" />
      </>
    )
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
    text: '2023 © YDH - 🎉 Sometimes it just happens'
  }
}

export default config
