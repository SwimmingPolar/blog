import { HomeBanner } from '@/components'
import { useRenderOnHome } from '@/hooks'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const isOnHome = useRenderOnHome()

  // When on home page, show the footer at the bottom
  useEffect(() => {
    // Content container
    const container = document.querySelector('#__next div[dir="ltr"]')
    if (isOnHome) {
      container?.classList.add('home')
    }

    return () => {
      if (isOnHome) {
        container?.classList.remove('home')
      }
    }
  }, [isOnHome])

  return (
    <>
      {isOnHome ? <HomeBanner /> : null}
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
