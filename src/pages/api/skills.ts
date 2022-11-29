import { VercelRequest, VercelResponse } from '@vercel/node'
import { connectDb } from '../../utils/db'

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === 'GET') {
    const { db } = await connectDb()

    const data = await db.collection('subs').find({}).sort({}).toArray()

    if (!data) {
      res.status(400).json({ errors: ['Problema na requisição.'] })
      return
    }

    return res.status(200).json(data)
  } else {
    return res.status(400).json({ errors: ['Bad request.'] })
  }
}
