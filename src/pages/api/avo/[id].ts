import { NextApiRequest, NextApiResponse } from 'next';
import DB from 'database/db';

const getOneAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const id = req.query.id;
  const entry = await db.getById(id as string);
  res.setHeader('Constent-type', 'aplication/json');
  res.status(200).json(entry);
};

export default getOneAvo;
