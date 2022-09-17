import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import HomePage from 'components/home-page';
import { getLayoutData } from 'fetcher/fetcher';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Webreview | Trang chủ</title>
        <meta name="description" content="Webreview | SEO | Marketing" />
      </Head>
      <HomePage />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const layout = await getLayoutData();
  return { props: { layout } };
};

export default Home;
