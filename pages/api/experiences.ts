// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDocs } from '@/lib/doc';
import { Awaited } from '@/shared/interfaces';
import { ExperienceModel } from '@/shared/types';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = Awaited<ReturnType<typeof getDocs>>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const contents = await getDocs<ExperienceModel>('docs/experiences');

  res.status(200).json(contents);
}
