import { useCurrentLanguage } from '@/hooks'
import React from 'react'
import styles from './TechStacks.module.css'

export const TechStacks = () => {
  const text = useCurrentLanguage({
    ko: '스택',
    en: 'Stacks'
  })
  return <h1 className={styles.logo}>{text}</h1>
}
