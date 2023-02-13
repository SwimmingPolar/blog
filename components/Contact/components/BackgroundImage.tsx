import React from 'react'
import styles from './BackgroundImage.module.css'
import clsx from 'clsx'

export const BackgroundImage = () => {
  return (
    <div className={clsx(styles.box, 'hidden md:flex')}>
      <div className={styles['swimming-polar']} />
    </div>
  )
}
