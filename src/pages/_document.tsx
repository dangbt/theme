import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
export default function Document() {
  return (
    <Html lang="vn">
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Webreview" />
        <meta property="og:url" content={`https://webreview.click`} />
        <meta
          property="og:title"
          content="Webreview | Contet | SEO | Marketing"
        />
        <meta
          property="og:description"
          content="Webreview | chiến lược marketing | SEO |  Top"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
