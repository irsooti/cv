import matter, { GrayMatterFile, GrayMatterOption } from 'gray-matter';
import { join } from 'path';
import fs from 'fs';
import { ExperienceModel } from '@/shared/types';

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
    const [beforeMonth, beforeYear] = before.meta.endDate.split('/');
    const [afterMonth, afterYear] = after.meta.endDate.split('/');
    return (
      new Date(Number(afterYear), Number(afterMonth), 1).getFullYear() -
      new Date(Number(beforeYear), Number(beforeMonth), 1).getFullYear()
    );
  });

  return sortedContents;
}
