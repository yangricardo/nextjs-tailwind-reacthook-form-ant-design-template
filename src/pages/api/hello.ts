// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  privateKey: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res
    .setHeader(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload',
    )
    .status(200)
    .json({
      name: (req.query.name as string) || 'John Doe',
      privateKey: process.env.PRIVATE_KEY || '',
    });
}
