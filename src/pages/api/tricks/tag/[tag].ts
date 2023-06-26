import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { tag } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db('video');

    const movies = await db
      .collection('tricks-webm')
      .find({ tags: tag })
      .limit(10)
      .toArray();

    res.json(movies);
  } catch (e) {
    console.error(e);
  }
};
