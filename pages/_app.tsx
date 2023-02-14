import { HomeBanner } from '@/components'
import { useMarkPathname } from '@/hooks'
import { AppProps } from 'next/app'
import { useEffect, useMemo } from 'react'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  // Return locale and route and
  // mark them on the root element
  const { currentPath } = useMarkPathname()

  const isHome = useMemo(() => currentPath === 'home', [currentPath])

  return (
    <>
      {isHome ? <HomeBanner /> : null}
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
