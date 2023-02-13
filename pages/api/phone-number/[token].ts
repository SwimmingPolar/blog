import { NextApiRequest, NextApiResponse } from 'next'
import { tokensCollection } from '@/db'
import { getContactInfo } from '@/lib'
import { pruneDatabase } from '../contact/[token]'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query as { token: string }

  // Assess all tokens in the database before
  // checking if the token is valid
  await pruneDatabase()

  const isValidToken = await tokensCollection.doc(token).get()

  if (isValidToken) {
    const phone = getContactInfo().phone
    res.json(phone)
  } else {
    res.status(400).json({ message: 'Token is invalid' })
  }
}
