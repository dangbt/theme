import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'components/layout';
import React from 'react';
import { getDataFromObject } from 'utils/get-data';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout
      header={getDataFromObject(pageProps, 'layout.data.attributes.header')}
      footer={getDataFromObject(pageProps, 'layout.data.attributes.footer')}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
