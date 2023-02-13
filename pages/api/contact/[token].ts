import { NextApiRequest, NextApiResponse } from 'next'
import { tokensCollection } from '@/db'
import { getContactInfo } from '@/lib'

// Assess all tokens in the database and
// remove any that are older than 5 minutes
export const pruneDatabase = async () => {
  const tokens = await tokensCollection.get()
  tokens.forEach(async token => {
    const { timestamp } = token.data()
    const fiveMinutesAgo = new Date().getTime() - 1000 * 60 * 5

    if (timestamp < fiveMinutesAgo) {
      await token.ref.delete()
    }
  })
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query as { token: string }

  // Assess all tokens in the database before
  // checking if the token is valid
  await pruneDatabase()

  const isValidToken = await tokensCollection.doc(token).get()

  if (isValidToken) {
    const contact = getContactInfo()
    delete contact.phone

    res.json(contact)
  } else {
    res.status(400).json({ message: 'Token is invalid' })
  }
}
