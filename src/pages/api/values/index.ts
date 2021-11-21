import { ValueRepository } from '@/backend/modules/value/ValueRepository';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { container } from 'tsyringe';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const valueRepository = container.resolve(ValueRepository);
  switch(req.method) {
    case 'GET':
      res.status(200).json(valueRepository.index());
      break;
    case 'POST':
      res.status(201).json(valueRepository.create(req.body));
      break;
    default:
      res.status(405).json(undefined);
      break;
  }
}
