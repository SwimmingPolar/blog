import { FC } from 'react'
import styles from './index.module.css'

export const HomeBanner: FC = () => {
  return (
    <div className="wrapper">
      <div className={styles.wrapper + ' home-banner'}>
        <div className={styles.box}>
          <div className={styles.image} />
        </div>
      </div>
    </div>
  )
}
