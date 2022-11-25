import Head from 'next/head';
import React from 'react';
import Footer, { FooterProps } from './footer';
import Header, { HeaderProps } from './header';
import END_POINTS from 'fetcher/endpoint';
import { getDataFromObject } from 'utils/get-data';

interface LayoutProps {
  children: React.ReactNode;
  header: HeaderProps['header'];
  footer: FooterProps['footer'];
}

export default function Layout({ children, header, footer }: LayoutProps) {
  const logo = getDataFromObject(
    header,
    'logo.data.attributes.formats.thumbnail.url',
  );
  return (
    <>
      <Head>
        <link rel="icon" href={`${END_POINTS.BASE_URL}${logo}`} />
      </Head>
      <div className="flex min-h-screen flex-col">
        <Header header={header} />
        <main className="static z-0 flex-1">{children}</main>
        <Footer footer={footer} />
      </div>
    </>
  );
}
