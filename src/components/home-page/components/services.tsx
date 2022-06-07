import Button from 'components/button';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import i18n, { Language } from 'i18n';
import { useRouter } from 'next/router';
import { PaperAirplaneIcon } from '@heroicons/react/outline';

const hoverCss = 'shadow-1';

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
        <div className="  grid grid-cols-12 gap-8">
          <div
            onMouseEnter={() => setIndexHover(1)}
            className={[
              'group col-span-4 rounded-[15px] p-[40px]',
              indexHover === 1 ? hoverCss : '',
            ].join(' ')}
          >
            <div className="mb-[20px] text-center">
              <div className="inline-block rounded-hafl bg-green p-[15px]">
                <PaperAirplaneIcon width={40} className="text-white" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-heading-4">Strategy & Research</h4>
              <p>
                Fusce sit amet dui vitae urna tristique imperdiet. Donec eget
                sapien euismod, faucibus nibh non, consequat elit. Praesent sed
                vehicula.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setIndexHover(2)}
            className={[
              'group col-span-4 rounded-[15px] p-[40px]',
              indexHover === 2 ? hoverCss : '',
            ].join(' ')}
          >
            <div className="mb-[20px] text-center">
              <div className="inline-block rounded-hafl bg-green p-[15px]">
                <PaperAirplaneIcon width={40} className="text-white" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-heading-4">Strategy & Research</h4>
              <p>
                Fusce sit amet dui vitae urna tristique imperdiet. Donec eget
                sapien euismod, faucibus nibh non, consequat elit. Praesent sed
                vehicula.
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setIndexHover(3)}
            className={[
              'group col-span-4 rounded-[15px] p-[40px]',
              indexHover === 3 ? hoverCss : '',
            ].join(' ')}
          >
            <div className="mb-[20px] text-center">
              <div className="inline-block rounded-hafl bg-green p-[15px]">
                <PaperAirplaneIcon width={40} className="text-white" />
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-heading-4">Strategy & Research</h4>
              <p>
                Fusce sit amet dui vitae urna tristique imperdiet. Donec eget
                sapien euismod, faucibus nibh non, consequat elit. Praesent sed
                vehicula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
