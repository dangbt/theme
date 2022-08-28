import Button from 'components/button';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import i18n, { Language } from 'i18n';
import { useRouter } from 'next/router';
import { PaperAirplaneIcon } from '@heroicons/react/outline';

interface PropsBox {
  setIndexHover: () => void;
  indexHover: number;
  index: number;
  color: string;
  title: string;
  desc: string;
}
const hoverCss =
  'shadow-1 after:scale-110  before:scale-110 before:opacity-1 after:opacity-1 ';

const Box = ({
  setIndexHover,
  indexHover,
  index,
  color,
  title,
  desc,
}: PropsBox) => {
  return (
    <div
      onMouseEnter={setIndexHover}
      className={[
        'group relative col-span-3 rounded-[15px] p-[40px]',
        `transition-all before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:bg-[image:url('/images/services-bg-2.png')] before:bg-no-repeat before:transition-all before:duration-500 after:absolute  after:left-0 after:right-0 after:bottom-0  after:top-0 after:bg-[image:url('/images/services-bg.png')] after:bg-no-repeat after:transition-all after:duration-500`,
        indexHover === index ? hoverCss : ' before:opacity-0 after:opacity-0',
      ].join(' ')}
    >
      <div className="mb-[20px] text-center">
        <div
          className={`inline-block rounded-hafl bg-${color} p-[20px] shadow-${color}`}
        >
          <PaperAirplaneIcon
            width={40}
            className="text-white group-hover:animate-up-to-down"
          />
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-heading-4">{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const router = useRouter();
  const [indexHover, setIndexHover] = useState(1);

  const t = i18n[(router.locale as Language) || Language['vn']];
  return (
    <div className="pt-[100px] pb-[70px]">
      <div className=" container">
        <div className="mb-[40px] space-y-[20px] text-center">
          <Button>Services</Button>
          <h2 className="text-heading-2">Provide Awesome Service To You</h2>
        </div>
        <div className=" grid grid-cols-11 gap-8">
          <div className="col-span-1" />
          <Box
            indexHover={indexHover}
            index={1}
            setIndexHover={() => setIndexHover(1)}
            color="yellow"
            title="Strategy & Research"
            desc=" Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
          />
          <Box
            indexHover={indexHover}
            index={2}
            setIndexHover={() => setIndexHover(2)}
            color="red"
            title="Web Development"
            desc=" Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
          />
          <Box
            indexHover={indexHover}
            index={3}
            setIndexHover={() => setIndexHover(3)}
            color="green"
            title="Web Solution"
            desc="Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
          />
          <div className="col-span-1" />
        </div>
      </div>
    </div>
  );
}
