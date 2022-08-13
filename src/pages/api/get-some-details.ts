import { NextApiRequest, NextApiResponse } from 'next';
import apiClient from '@src/libs/axios';

interface SomeResponse {
  name: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<SomeResponse>) {
  const { name } = req.body;
  const result = await apiClient.post('someurl', {
    name
  });

  res.status(200).json(result.data);
}
