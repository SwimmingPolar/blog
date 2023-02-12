import { useCurrentLanguage } from '@/hooks'
import styles from './ContentTitle.module.css'

type ContentTitle = {
  title: string
}

export const ContentTitle = ({ title }: ContentTitle) => {
  const titleAsistText = useCurrentLanguage({
    ko: '경험',
    en: 'With'
  })
  return (
    <div className={styles.contentTitle}>
      <h2 className={styles.heading}>
        <span className={styles.title}>{title}</span>{' '}
        <span className={styles.with}>{' ' + titleAsistText}</span>
      </h2>
    </div>
  )
}
