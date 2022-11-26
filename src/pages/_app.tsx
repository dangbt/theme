import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'components/layout';
import React from 'react';
import { getDataFromObject } from 'utils/get-data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props extends AppProps {
  Component: AppProps['Component'] & {
    Layout: () => JSX.Element;
  };
}

function MyApp({ Component, pageProps }: Props) {
  const L = Component.Layout ? Component.Layout : Layout;
  return (
    <L
      header={getDataFromObject(pageProps, 'layout.data.attributes.header')}
      footer={getDataFromObject(pageProps, 'layout.data.attributes.footer')}
    >
      <Component {...pageProps} />
    </L>
  );
}

export default MyApp;
