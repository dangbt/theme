import React from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="static z-0 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
