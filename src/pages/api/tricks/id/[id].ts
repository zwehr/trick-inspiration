import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db('video');

    const movies = await db
      .collection('tricks-webm')
      .findOne({ _id: new ObjectId(id as string) });

    res.json(movies);
  } catch (e) {
    console.error(e);
  }
};
