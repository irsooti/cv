import { H1, Img, A } from '@/components/Typography';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';
import classes from './Experience.module.css';

type Props = {
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export const ExperienceArticle: React.FC<Props> = ({ content, children }) => {
  return (
    <article className={classes.article}>
      <div className={classes.articleHeader}>{children}</div>
      <div className={classes.articleBody}>
        <MDXRemote {...content} components={{ H1, img: Img, a: A }} />
      </div>
    </article>
  );
};
