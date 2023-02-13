import { useCallback, useEffect, useState } from 'react'
import { useLocalStorage, useSwr } from '@/hooks'

export type ContactData = {
  names: {
    en: string
    ko: string
  }
  email: string
  birthDay: string
  discord: string
  phone: string
}

export const useLoadContact = () => {
  const { localStorage } = useLocalStorage()
  // Contact data
  const [contact, setContact] = useState<ContactData | null>(null)
  // Set the short token if it exists in localStorage
  const [token, setToken] = useState<string | null>(null)

  // Fetch contact info on render if the token exists
  const { data, error, isLoading } = useSwr<ContactData>(
    token ? '/api/contact/' + token : null
  )

  if (error) {
    // On error, set token to null.
    // This will render the ReCapcha component
    setToken(null)
    // Remove the token from the localStorage
    localStorage?.removeItem('token')
  }

  const handleTokenChange = useCallback((token: string | null) => {
    setToken(token)
  }, [])

  // Set the token on the localStorage on mount
  useEffect(() => {
    const token = localStorage?.getItem('token')
    if (token) {
      setToken(token)
    }
  }, [])

  // Set contact data on fetch success
  useEffect(() => {
    if (data) {
      setContact(data)
    }
  }, [data])

  return {
    token,
    contact,
    error,
    isLoading,
    handleTokenChange
  }
}
