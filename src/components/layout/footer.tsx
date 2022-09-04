import React, { useMemo } from 'react';
import { DeviceMobileIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Img from 'next/image';
import { useRouter } from 'next/router';
import { FooterInterface } from './interface';
import END_POINTS from 'fetcher/endpoint';
import { getDataFromObject } from 'utils/get-data';

const BEFORE_TITLE =
  'before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-[15px] before:rounded-[20px] before:bg-white';

const AFTER_TITLE =
  'after:absolute after:bottom-0 after:left-[20px] after:h-[4px] after:w-[45px] after:rounded-[20px] after:bg-white';

export interface FooterProps {
  footer: FooterInterface;
}
export default function Footer({ footer }: FooterProps) {
  const { locale } = useRouter();

  const [logo, phone, email, address, box]: [
    FooterInterface['logo'],
    FooterInterface['phone'],
    FooterInterface['email'],
    FooterInterface['address'],
    FooterInterface['box'],
  ] = useMemo(() => {
    return [
      getDataFromObject(footer, 'logo.data.attributes.formats.thumbnail.url'),
      getDataFromObject(footer, 'phone'),
      getDataFromObject(footer, 'email'),
      getDataFromObject(footer, 'address'),
      getDataFromObject(footer, 'box'),
    ];
  }, [footer]);

  return (
    <footer
      className={`bg-primary bg-[url('/images/bg10.png')] bg-cover  bg-center bg-no-repeat`}
    >
      <div className="container py-[80px] px-[30px] md:px-0">
        <div className="text-body-2 mb-[30px] items-center justify-between border-b pb-[30px] text-white md:flex">
          {logo && (
            <div>
              <Link href="/" locale={locale}>
                <Img
                  src={`${END_POINTS.BASE_URL}${logo}`}
                  width={100}
                  height={80}
                />
              </Link>
            </div>
          )}

          <div className="flex items-center space-x-[10px]">
            <div className="flex">
              <DeviceMobileIcon width={50} />
              <div>
                <p>{phone}</p>
                <p>{email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <LocationMarkerIcon width={50} />
              <div>
                <p>{address}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white">
          {box.map((fl, index) => {
            return (
              <div
                key={index}
                className={`inline-block h-full w-1/2 align-top md:w-1/4 ${
                  index !== 0 ? 'mb-[30px] md:mb-0 md:pl-[100px]' : ''
                }`}
              >
                <h1
                  className={[
                    'text-heading-4 relative mb-[30px] pb-[10px]',
                    BEFORE_TITLE,
                    AFTER_TITLE,
                  ].join(' ')}
                >
                  {fl.text}
                </h1>
                {fl.description && <p>{fl.description}</p>}
                {fl.links && fl.links.length > 0 && (
                  <ul>
                    {fl.links.map((l) => {
                      return (
                        <li
                          key={l.href}
                          className="py-[5px] transition-all hover:pl-[10px]"
                        >
                          <Link href={l.href} locale={locale}>
                            {l.text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-body-1 bg-[#b3a1ff] py-[15px] text-center text-white">
        Copyright © 2021 Webdanhgia. All rights reserved.
      </div>
    </footer>
  );
}
