import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db('video');

    const tricks = await db
      .collection('tricks-webm')
      .find({ skater: name })
      .limit(10)
      .toArray();

    res.json(tricks);
  } catch (e) {
    console.error(e);
  }
};
