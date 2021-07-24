import matter, { GrayMatterFile, GrayMatterOption } from 'gray-matter';
import { join } from 'path';
import fs from 'fs';

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
