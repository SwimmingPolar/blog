import { LoadingSpinner } from '@/components'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useSwr } from '@/hooks'

type ReCapchaProps = {
  handleClose: () => void
  handleTokenChange: (token: string | null) => void
}

export const ReCapcha = ({ handleClose, handleTokenChange }: ReCapchaProps) => {
  const [recapchaToken, setRecapchaToken] = useState<string | null>(null)

  const ref = useRef<ReCAPTCHA>(null)
  const handleChange = useCallback(() => {
    const recapchaToken = ref?.current?.getValue()
    if (recapchaToken) {
      setRecapchaToken(recapchaToken)
    }
  }, [])

  // Send token for verification
  const { data, error, isLoading } = useSwr<{ token: string }>(
    recapchaToken ? '/api/verify/' + recapchaToken : null
  )

  useEffect(() => {
    // If the verification is successful,
    // the token will be returned from the server
    if (data) {
      // Set the token so that the contact info can be fetched
      handleTokenChange(data?.token)
      // Save the token to the localStorage
      global?.localStorage?.setItem('token', data?.token)
      // Close the modal
      handleClose()
    }
  }, [data])

  // On error, reset and remove the token
  if (error) {
    console.log('reset')
    handleTokenChange(null)
    global?.localStorage?.removeItem('token')
    // Close the modal
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <ReCAPTCHA
      ref={ref}
      sitekey={process.env.RECAPCHA_SITE_KEY || ''}
      onChange={handleChange}
    />
  )
}
