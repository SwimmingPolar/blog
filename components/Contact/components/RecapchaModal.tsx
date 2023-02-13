import React, { useCallback, useState } from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import styles from './RecapchaModal.module.css'
import { ReCapcha } from '@/components'
import { useCurrentLanguage } from '@/hooks'

type RecapchaModalProps = {
  token: string | null
  handleTokenChange: (token: string | null) => void
}

export const RecapchaModal = ({
  token,
  handleTokenChange
}: RecapchaModalProps) => {
  const [open, setOpen] = useState(false)

  const text = useCurrentLanguage({
    en: 'Show Contact',
    ko: '연락처 보기'
  })

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <div className={styles.box}>
      {!token ? (
        <Button
          onClick={handleOpen}
          variant="outlined"
          sx={{
            fontWeight: 'bold'
          }}
        >
          {text}
        </Button>
      ) : null}
      <Modal
        open={open}
        onClose={handleClose}
        className="flex justify-center items-center"
      >
        <div className={styles['modal-box']}>
          <ReCapcha
            handleClose={handleClose}
            handleTokenChange={handleTokenChange}
          />
        </div>
      </Modal>
    </div>
  )
}
