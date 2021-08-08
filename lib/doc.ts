import { ExperienceModel } from '@/shared/types';
import { compareAsc } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export function getDocBySlug<T extends { [key: string]: any }>(
  slug: string,
  path: string
) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(join(process.cwd(), path), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data as T, content };
}

export function getDocs<T extends { [key: string]: any }>(path: string) {
  const files = fs.readdirSync(path, 'utf8');

  return Promise.all(files.map((c) => getDocBySlug<T>(c, path)));
}

export function sortExperienceDocsByDate(
  docs: {
    slug: string;
    meta: ExperienceModel;
    content: string;
  }[]
) {
  const sortedContents = docs.sort((before, after) => {
    const [endBeforeMonth, endBeforeYear] = before.meta.endDate.split('/');
    const [endAfterMonth, endAfterYear] = after.meta.endDate.split('/');

    return compareAsc(
      new Date(Number(endAfterYear), Number(endAfterMonth), 1),
      new Date(Number(endBeforeYear), Number(endBeforeMonth), 1)
    );
  });

  return sortedContents;
}
