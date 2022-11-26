import React from 'react';
import Slider, { Settings } from 'react-slick';
const DEFAULT_SETTINGS: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};
interface Props {
  children: React.ReactNode;
  settings?: Settings;
}

export function SimpleSlider({ children, settings }: Props) {
  const st: Settings = {
    ...DEFAULT_SETTINGS,
    ...settings,
  };
  return <Slider {...st}>{children}</Slider>;
}
