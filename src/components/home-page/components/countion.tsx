import React from 'react';
import i18n, { Language } from 'i18n';
import { useRouter } from 'next/router';
import Box, { TYPE_ANIMATION } from 'components/box';
import {
  EmojiHappyIcon,
  DesktopComputerIcon,
  PaperAirplaneIcon,
  FlagIcon,
} from '@heroicons/react/outline';

export default function CountSection() {
  const router = useRouter();
  const t = i18n[(router.locale as Language) || Language['vn']];
  return (
    <div
      style={{
        backgroundImage: 'url(/images/bg3.png)',
      }}
      className="bg-primary py-[150px]"
    >
      <div className=" container grid grid-cols-12 gap-8">
        <div className="col-span-3 text-center">
          <Box typeAnimation={TYPE_ANIMATION.translate}>
            <div className="inline-block rounded-hafl bg-green p-[15px]">
              <EmojiHappyIcon className="mx-auto text-white" width={40} />
            </div>
            <div></div>
            <p className="text-[20px] font-medium">{t.home.countion.client}</p>
            <h2 className="text-heading-2 text-primary">9875</h2>
          </Box>
        </div>
        <div className="col-span-3 translate-y-[15px] text-center ">
          <Box typeAnimation={TYPE_ANIMATION.translate}>
            <div className="inline-block rounded-hafl bg-yellow p-[15px]">
              <DesktopComputerIcon className="mx-auto text-white" width={40} />
            </div>
            <div></div>
            <p className="text-[20px] font-medium">{t.home.countion.project}</p>
            <h2 className="text-heading-2 text-primary">9875</h2>
          </Box>
        </div>
        <div className="col-span-3 text-center">
          <Box typeAnimation={TYPE_ANIMATION.translate}>
            <div className="inline-block rounded-hafl bg-blue p-[15px]">
              <PaperAirplaneIcon className="mx-auto text-white" width={40} />
            </div>
            <div></div>
            <p className="text-[20px] font-medium">{t.home.countion.country}</p>
            <h2 className="text-heading-2 text-primary">9875</h2>
          </Box>
        </div>
        <div className="col-span-3 translate-y-[15px] text-center">
          <Box typeAnimation={TYPE_ANIMATION.translate}>
            <div className="inline-block rounded-hafl bg-red p-[15px]">
              <FlagIcon className="mx-auto text-white" width={40} />
            </div>
            <div></div>
            <p className="text-[20px] font-medium">{t.home.countion.years}</p>
            <h2 className="text-heading-2 text-primary">9875</h2>
          </Box>
        </div>
      </div>
    </div>
  );
}
