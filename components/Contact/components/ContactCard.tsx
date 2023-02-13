import { ContactData } from '@/components/Contact/hooks'
import { useCurrentLanguage, useSwr } from '@/hooks'
import DiscordIcon from '@/public/pages/contact/discord.png'
import EmailIcon from '@/public/pages/contact/email.png'
import PhoneIcon from '@/public/pages/contact/phone.png'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import styles from './ContactCard.module.css'

// Need this for SSR
const Toaster = dynamic(
  async () => {
    const { Toaster } = await import('react-hot-toast')
    return Toaster
  },
  {
    ssr: false
  }
)

type SkeletonProps = {
  contact?: ContactData | null
  text: string | undefined
  alterText: string
  component?: JSX.Element
  className?: string
}

const Skeleton = ({
  contact,
  text,
  alterText,
  component,
  className
}: SkeletonProps) => {
  // Decide whether to render the skeleton or not
  const shouldRenderSkeleton = text && text.length > 0
  // If the component is provided, render the component
  const renderComponent = component ? (
    component
  ) : (
    <span className={clsx(className, contact ? styles.revealed : '')}>
      {text}
    </span>
  )

  return shouldRenderSkeleton ? (
    renderComponent
  ) : (
    <span
      className={clsx(className, styles.blur, contact ? styles.revealed : '')}
    >
      {alterText}
    </span>
  )
}

type ContactInfoProps = {
  token: string | null
  contact?: ContactData | null
}

export const ContactInfo = ({ token, contact }: ContactInfoProps) => {
  const { names, birthDay, email, discord } = contact || {}
  const name = useCurrentLanguage(names as ContactData['names'])

  const handleCopy = (function () {
    let lock = false

    return (text?: string) => {
      // If no text, do nothing
      if (!text) {
        return
      }
      // Throttle
      if (lock) {
        return
      }
      lock = true

      toast('Copied: ' + text, {
        position: 'bottom-center'
      })
      navigator.clipboard.writeText(text)

      // Unlock after 500ms
      setTimeout(() => {
        lock = false
      }, 500)
    }
  })()

  const [shouldGetPhone, setShouldGetPhone] = useState(false)
  const { data: phone } = useSwr<string>(
    shouldGetPhone ? '/api/phone-number/' + token : null
  )
  const requestPhoneNumberText = useCurrentLanguage({
    en: 'Request phone number',
    ko: '전화번호 요청하기'
  })
  // On phone click, we have 3 cases:
  const handlePhoneClick = useCallback(() => {
    // 1. If the phone info is loaded, copy to clipboard
    if (phone) {
      handleCopy(phone)
    }
    // 2. If the phone info is not loaded but the contact info is loaded,
    //    show prompt to request phone number
    else if (!phone && contact) {
      const shouldRequest = confirm(requestPhoneNumberText)
      if (shouldRequest) {
        setShouldGetPhone(true)
      }
    } else {
      // do nothing
    }
  }, [phone, requestPhoneNumberText, contact])

  return (
    <div className={styles.box}>
      <div className={styles['small-header']}>
        <span>연락처</span>
      </div>
      <div className={styles.content}>
        <div className={styles.name}>
          <Skeleton text={name} alterText="우동집" className={styles.name} />
        </div>
        <div className={styles.age}>
          <Skeleton
            text={birthDay}
            alterText="1950 |"
            component={<span>{birthDay + ' |'}</span>}
          />
        </div>
        <div className={styles['contact-list']}>
          <div
            className={styles['contact-item']}
            onClick={() => handleCopy(email)}
          >
            <Image
              src={EmailIcon}
              alt="email"
              width={15}
              height={15}
              className={clsx(styles.img, email ? '' : styles.blur)}
            />
            <Skeleton
              text={email}
              alterText="captain:masterChief@halo.com"
              component={<div>{email}</div>}
            />
          </div>
          <div
            className={styles['contact-item']}
            onClick={() => handleCopy(discord)}
          >
            <Image
              src={DiscordIcon}
              alt="discord"
              width={18}
              height={18}
              className={clsx(styles.img, discord ? '' : styles.blur)}
            />
            <Skeleton
              text={discord}
              alterText="discord#7777"
              component={<div>{discord}</div>}
            />
          </div>
          <div className={styles['contact-item']} onClick={handlePhoneClick}>
            <Image
              src={PhoneIcon}
              alt="phone"
              width={18}
              height={18}
              className={clsx(
                styles.img,
                !phone ? styles.blur : '',
                contact ? 'revealed' : ''
              )}
            />
            <Skeleton
              contact={contact}
              text={phone}
              alterText="+82 10-1910-9327"
              component={<div>{phone}</div>}
            />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
