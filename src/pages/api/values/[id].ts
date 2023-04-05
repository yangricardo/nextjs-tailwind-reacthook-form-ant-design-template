import { ValueRepository } from '@/backend/modules/value/ValueRepository';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { container } from 'tsyringe';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const valueRepository = container.resolve(ValueRepository);
  let id = req.query.id as string;
  switch (req.method) {
    case 'GET':
      const foundValue = valueRepository.findById(parseInt(id as string));
      res
        .setHeader(
          'Strict-Transport-Security',
          'max-age=31536000; includeSubDomains; preload',
        )
        .status((foundValue && 200) || 404)
        .json(foundValue);
      break;
    case 'PATCH':
      const updatedValue = valueRepository.update(
        parseInt(id as string),
        req.body,
      );
      res
        .setHeader(
          'Strict-Transport-Security',
          'max-age=31536000; includeSubDomains; preload',
        )
        .status((updatedValue && 200) || 404)
        .json(updatedValue);
      break;
    case 'DELETE':
      valueRepository.delete(parseInt(id as string));
      res
        .setHeader(
          'Strict-Transport-Security',
          'max-age=31536000; includeSubDomains; preload',
        )
        .status(200)
        .json(undefined);
      break;
    default:
      res
        .setHeader(
          'Strict-Transport-Security',
          'max-age=31536000; includeSubDomains; preload',
        )
        .status(405)
        .json(undefined);
      break;
  }
}
