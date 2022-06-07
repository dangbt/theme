import Button from 'components/button';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import i18n, { Language } from 'i18n';
import { useRouter } from 'next/router';

export default function IntroSection() {
  const router = useRouter();
  const t = i18n[(router.locale as Language) || Language['vn']];
  return (
    <div
      className="flex min-h-[750px] items-center justify-center bg-no-repeat pt-[100px] pb-[70px]"
      style={{
        backgroundImage: 'url(/images/pic2.png)',
      }}
    >
      <div className=" container grid grid-cols-12 gap-8">
        <div className="col-span-6 flex flex-col justify-center">
          <h6 className="text-heading-6 mb-[20px] uppercase tracking-widest text-primary">
            {t.home.intro.title}
          </h6>
          <h1 className="text-heading-1 mb-[20px] text-secondary">
            {t.home.intro.title1}{' '}
            <span className="text-primary">{t.home.intro.title2}</span>{' '}
            {t.home.intro.title3}
          </h1>
          <p className="mb-[20px] text-victoria">{t.home.intro.para}</p>
          <Link href="/" locale="vn">
            <a className="inline-block">
              <Button>{t.home.intro.button}</Button>
            </a>
          </Link>
        </div>
        <div className="relative col-span-6">
          <div className="absolute left-0 right-0">
            <Image
              className="animate-move1"
              src="/images/pic1.png"
              width={450}
              height={386}
              layout="responsive"
              alt=""
            />
          </div>
          <div>
            <Image
              width={450}
              height={386}
              layout="responsive"
              className="animate-move2"
              src="/images/pic3.png"
              alt=""
            />
          </div>
          <div
            className="dz-media move-box wow fadeIn"
            data-wow-duration="1.6s"
            data-wow-delay="0.8s"
          ></div>
        </div>
      </div>
    </div>
  );
}
