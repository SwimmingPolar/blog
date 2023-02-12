import { useCurrentLanguage } from '@/hooks'

type LanguageSupport = {
  text: Record<'en' | 'ko', string>
}

export const LanguageSupport = (props: LanguageSupport) => {
  const text = useCurrentLanguage(props.text)

  return <>{text}</>
}
