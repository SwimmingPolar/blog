import { NextApiRequest, NextApiResponse } from 'next'
import { tokensCollection } from '@/db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { token: recapchaToken } = req.query as { token: string }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${recapchaToken}`,
      {
        method: 'POST'
      }
    )

    // Use the created document's ID as the token
    const data = {
      timestamp: new Date().getTime() + ''
    }
    const token = (
      await tokensCollection.add({
        timestamp: new Date().getTime() + ''
      })
    ).id

    // If the verification was successful, return the response
    if (response.ok) {
      res.json({
        token
      })
    }
    // If the verification failed, return an error
    else {
      res.status(400).json({ message: 'Verification failed' })
    }
  } catch (error) {
    console.log('Error verifying token')
    console.log('---------------------')
    console.log(error)
  }
}
