import React from 'react';
import Footer, { FooterProps } from './footer';
import Header, { HeaderProps } from './header';

interface LayoutProps {
  children: React.ReactNode;
  header: HeaderProps['header'];
  footer: FooterProps['footer'];
}

export default function Layout({ children, header, footer }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header header={header} />
      <main className="static z-0 flex-1">{children}</main>
      <Footer footer={footer} />
    </div>
  );
}
