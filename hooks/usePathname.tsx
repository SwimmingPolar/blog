import { useRouter } from 'next/router'
import { useMemo } from 'react'

export const usePathname = () => {
  const { locale, pathname } = useRouter()

  // Custom pathname mapping
  const currentPath = useMemo(() => {
    let pathnameToken = pathname.split('/')[1].split('.')[0]

    switch (pathnameToken) {
      case 'index':
        pathnameToken = 'home'
        break
    }
    return pathnameToken
  }, [pathname])

  return { locale, currentPath }
}
