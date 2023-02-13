import { useRouter } from 'next/router'

type SupportedLanguage = 'en' | 'ko'

type UseCurrentLanguage = Record<SupportedLanguage, string>

export const useCurrentLanguage = (props: UseCurrentLanguage) => {
  const router = useRouter()
  const language = (router.locale ? router.locale : 'ko') as SupportedLanguage
  return props?.[language] ?? undefined
}
