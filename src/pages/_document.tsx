import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="vn">
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="webchiase" />
        <meta property="og:url" content={`https://webchiase.online`} />
        <meta
          property="og:title"
          content="Webchiase | Content | SEO | Marketing"
        />
        <meta
          property="og:description"
          content="Webchiase | Content | SEO | Marketing"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EFNPQ91Y9J"
        ></Script>
        <Script
          id="ga"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EFNPQ91Y9J');
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
