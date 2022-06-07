import Button from 'components/button';
import React from 'react';
import Image from 'next/image';
import i18n, { Language } from 'i18n';
import { useRouter } from 'next/router';
import {
  UserIcon,
  PaperAirplaneIcon,
  DesktopComputerIcon,
} from '@heroicons/react/outline';

export default function FeatureSection() {
  const router = useRouter();
  const t = i18n[(router.locale as Language) || Language['vn']];
  return (
    <div className="pt-[100px] pb-[70px]">
      <div className=" container grid grid-cols-12 gap-8">
        <div className="col-span-6 flex flex-col justify-center">
          <div className="mb-[32px]">
            <Button>{t.home.feature.button.feature}</Button>
          </div>
          <h2 className="text-heading-1 mb-[20px] text-secondary">
            {t.home.feature.title}
          </h2>
          <div>
            <div className="group flex items-center space-x-[20px]">
              <div className="relative min-h-[165px] min-w-[165px] ">
                <Image
                  className="group-hover:animate-rotate360"
                  src="/images/feature-red.png"
                  alt=""
                  width={165}
                  height={165}
                  layout="responsive"
                />
                <UserIcon
                  style={{
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute top-[50%] left-[50%] text-white"
                  width={40}
                />
              </div>
              <div className="w-full">
                <h4 className="text-heading-4 text-secondary">
                  {t.home.feature.title1}
                </h4>
                <p>{t.home.feature.para1}</p>
              </div>
            </div>
            <div className="group ml-[100px] flex items-center space-x-[20px]">
              <div className="relative min-h-[165px] min-w-[165px] ">
                <Image
                  className="group-hover:animate-rotate360"
                  src="/images/feature-yellow.png"
                  alt=""
                  width={165}
                  height={165}
                  layout="responsive"
                />
                <DesktopComputerIcon
                  style={{
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute top-[50%] left-[50%] text-white"
                  width={40}
                />
              </div>
              <div>
                <h4 className="text-heading-4 text-secondary">
                  {t.home.feature.title2}
                </h4>
                <p>{t.home.feature.para2}</p>
              </div>
            </div>
            <div className="group flex items-center space-x-[20px]">
              <div className="relative min-h-[165px] min-w-[165px] ">
                <Image
                  className="group-hover:animate-rotate360"
                  src="/images/feature-green.png"
                  alt=""
                  width={165}
                  height={165}
                  layout="responsive"
                />
                <PaperAirplaneIcon
                  style={{
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute top-[50%] left-[50%] text-white"
                  width={40}
                />
              </div>
              <div>
                <h4 className="text-heading-4 text-secondary">
                  {t.home.feature.title3}
                </h4>
                <p>{t.home.feature.para3}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-6">
          <div>
            <Image
              width={370}
              height={370}
              layout="responsive"
              className="animate-move2"
              src="/images/pic5.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
