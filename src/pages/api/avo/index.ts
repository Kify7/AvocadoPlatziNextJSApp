import { IncomingMessage, ServerResponse } from 'http';
import DB from 'database/db';

const getAllAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const length = allEntries.length;
  res.statusCode = 200;
  res.setHeader('Constent-type', 'aplication/json');
  res.end(JSON.stringify({ length, data: allEntries }));
};

export default getAllAvos;
