import Button from 'components/button';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import i18n, { Language } from 'i18n';
import { useRouter } from 'next/router';

export default function AboutUsSection() {
  const router = useRouter();
  const t = i18n[(router.locale as Language) || Language['vn']];
  return (
    <div className="pt-[100px] pb-[70px]">
      <div className=" container grid grid-cols-12 gap-8">
        <div className="relative col-span-6">
          <div className="">
            <Image
              className="animate-move1"
              src="/images/pic4.png"
              width={450}
              height={450}
              layout="responsive"
              alt=""
            />
          </div>
          <div
            className="dz-media move-box wow fadeIn"
            data-wow-duration="1.6s"
            data-wow-delay="0.8s"
          ></div>
        </div>
        <div className="col-span-6">
          <div className="mb-[32px]">
            <Button>{t.home.aboutUs.button.aboutUs}</Button>
          </div>
          <h2 className="text-heading-2 mb-[20px] text-secondary">
            {t.home.aboutUs.title}
          </h2>
          <p className="mb-[20px] text-victoria">{t.home.aboutUs.title1}</p>
          <p className="mb-[20px] text-victoria">{t.home.aboutUs.title2}</p>
          <Link href="/" locale="vn">
            <a className="inline-block">
              <Button>{t.home.aboutUs.button.learnMore}</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
