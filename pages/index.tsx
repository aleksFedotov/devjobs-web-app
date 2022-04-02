import type { NextPage } from 'next';
import Head from 'next/head';

import { ContentWrapper } from '../components/content-wrapper/ContentWrapperStyles';

import Search from '../components/index/search/Search';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Devjobs web app</title>
        <meta
          name="description"
          content="Devjobs web app with NextJS and TypeScript"
        />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <ContentWrapper>
        <Search />
      </ContentWrapper>
    </>
  );
};

export default Home;
