import { db } from './_utils/db';

export default async (req, res) => {
  const client = await db.connect();
  const { name, email } = req.body;

  const usersCollection =
    await client.db('Users').collection('users');

  const user = usersCollection.insertOne({ name, email });

  return res.json(user.ops);
}
