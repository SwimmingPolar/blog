import { NextApiRequest, NextApiResponse } from 'next'
import { tokensCollection } from '@/db'
import { getContactInfo } from '@/lib'
import { pruneDatabase } from '../contact/[token]'
import { isExpired } from '../contact/[token]'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query as { token: string }

  const isValidToken = (await tokensCollection.doc(token).get()).data()
  const isExpiredToken = isValidToken && isExpired(isValidToken.timestamp)

  if (!isExpiredToken) {
    const phone = getContactInfo().phone
    res.json(phone)
  } else {
    res.status(400).json({ message: 'Token is invalid' })
  }

  // Schedule the next prune
  setTimeout(() => {
    pruneDatabase()
  })
}
