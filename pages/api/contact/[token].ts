import { tokensCollection } from '@/db'
import { getContactInfo } from '@/lib'
import { NextApiRequest, NextApiResponse } from 'next'

export const isExpired = (timestamp: string) => {
  const fiveMinutesAgo = new Date().getTime() - 1000 * 60 * 5
  return parseInt(timestamp) < fiveMinutesAgo
}

// Assess all tokens in the database and
// remove any that are older than 5 minutes
export const pruneDatabase = async () => {
  const tokens = await tokensCollection.get()
  tokens.forEach(async token => {
    const { timestamp } = token?.data()

    if (isExpired(timestamp)) {
      await token.ref.delete()
    }
  })
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query as { token: string }

  const isValidToken = (await tokensCollection.doc(token).get()).data()
  const isExpiredToken = isValidToken && isExpired(isValidToken.timestamp)

  if (!isExpiredToken) {
    const contact = getContactInfo()
    delete contact.phone

    res.json(contact)
  } else {
    res.status(400).json({ message: 'Token is invalid' })
  }

  // Schedule the next prune
  setTimeout(() => {
    pruneDatabase()
  })
}
