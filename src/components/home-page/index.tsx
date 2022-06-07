import React from 'react';
import AboutUsSection from './components/about-us';
import CountSection from './components/countion';
import FeatureSection from './components/feature';
import IntroSection from './components/intro';
import ServicesSection from './components/services';

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <CountSection />
      <ServicesSection />
      <AboutUsSection />
      <FeatureSection />
    </>
  );
}
