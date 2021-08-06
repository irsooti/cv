import { ExperienceArticle } from '@/components/Experience/ExperienceArticle';
import { ExperienceHeader } from '@/components/Experience/ExperienceHeader';
import Layout, { Main } from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { getDocBySlug, getDocs } from '@/lib/doc';
import { ExperienceModel } from '@/shared/types';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

const H1 = (props: any) => <h1 style={{ color: 'tomato' }} {...props} />;

const SlugPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  content,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Navbar />
        <Main>
          <ExperienceArticle content={content.content}>
            <ExperienceHeader title={content.meta.description} />
          </ExperienceArticle>
        </Main>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const contents = await getDocs<ExperienceModel>('docs/experiences');

  const arr: string[] = contents.map((content) => content.slug);
  const paths = arr.map((slug) => {
    return {
      params: { slug },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { slug } = context.params as { slug: string };
  const content = await getDocBySlug<ExperienceModel>(slug, 'docs/experiences');

  return {
    props: { content },
  };
};

export default SlugPage;
