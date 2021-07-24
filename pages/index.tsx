import Experiences from '@/components/Experiences';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout/Layout';
import Main from '@/components/Layout/Main';
import Navbar from '@/components/Navbar';
import { getDocs } from '@/lib/doc';
import { ExperienceModel } from '@/shared/types';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  contents,
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
          <Hero />
          <Experiences experiences={contents.map((m) => m.meta)} />
        </Main>
      </Layout>
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const contents = await getDocs<ExperienceModel>('docs/experiences');

  return {
    props: { contents }, // will be passed to the page component as props
  };
};

export default Home;
