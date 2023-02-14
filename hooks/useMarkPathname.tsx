import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { usePathname } from '@/hooks'

// Mark locales and route on the root element
export const useMarkPathname = () => {
  const { locale, currentPath } = usePathname()

  // Mark route on the root element
  useEffect(() => {
    // Content container
    const container = document.querySelector('#__next div[dir="ltr"]')
    container?.classList.add(currentPath)

    return () => {
      container?.classList.remove(currentPath)
    }
  }, [currentPath])

  // Mark locale on the root element
  useEffect(() => {
    const container = document.querySelector('#__next div[dir="ltr"]')
    locale && container?.classList.add(locale)

    return () => {
      locale && container?.classList.remove(locale)
    }
  }, [locale])

  return { locale, currentPath }
}
