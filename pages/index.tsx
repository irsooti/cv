import Experiences from '@/components/Experiences';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout/Layout';
import Main from '@/components/Layout/Main';
import Navbar from '@/components/Navbar';
import PrintableMessage from '@/components/PrintableMessage';
import { getDocs, sortExperienceDocsByDate } from '@/lib/doc';
import { ExperienceModel } from '@/shared/types';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

const PrintableMessageWithNoSSR = dynamic(
  () => import('@/components/PrintableMessage'),
  { ssr: false }
);

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  contents,
}) => {
  const { t } = useTranslation();
  const experiences = contents.map((m) => m.meta);

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
          <Hero />
          <Experiences experiences={experiences} />
          <PrintableMessageWithNoSSR />
        </Main>
      </Layout>
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const contents = await getDocs<ExperienceModel>('docs/experiences');

  return {
    props: { contents: sortExperienceDocsByDate(contents) }, // will be passed to the page component as props
  };
};

export default Home;
