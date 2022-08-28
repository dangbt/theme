import React from 'react';
import { DeviceMobileIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Img from 'next/image';
import { useRouter } from 'next/router';

interface FooterLinkItem {
  title: string;
  description?: string;
  links: {
    href: string;
    text: string;
    icon?: string;
  }[];
}

const FOOTER_LINK: FooterLinkItem[] = [
  {
    title: 'About us',
    description:
      'Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.',
    links: [
      {
        href: '',
        text: '',
        icon: '',
      },
    ],
  },
  {
    title: 'Our links',
    links: [
      {
        text: 'Home',
        href: '/',
      },
      {
        text: 'About Us',
        href: '/about-us',
      },
      {
        text: 'Services',
        href: '/services',
      },
      {
        text: 'Team',
        href: '/team',
      },
      {
        text: 'Blog',
        href: '/blog',
      },
    ],
  },
  {
    title: 'Our Services',
    links: [
      {
        text: 'Strategy & Research',
        href: '#',
      },
      {
        text: 'Web Development',
        href: '#',
      },
      {
        text: 'Web Solution',
        href: '#',
      },
      {
        text: 'Digital Marketing',
        href: '#',
      },
      {
        text: 'App Design',
        href: '#',
      },
    ],
  },
  {
    title: 'Other links',
    links: [
      {
        text: 'FAQ',
        href: '#',
      },
      {
        text: 'Portfolio',
        href: '#',
      },
    ],
  },
];

const BEFORE_TITLE =
  'before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-[15px] before:rounded-[20px] before:bg-white';

const AFTER_TITLE =
  'after:absolute after:bottom-0 after:left-[20px] after:h-[4px] after:w-[45px] after:rounded-[20px] after:bg-white';

export default function Footer() {
  const { locale } = useRouter();

  return (
    <footer
      className={`bg-primary bg-[url('/images/bg10.png')] bg-cover  bg-center bg-no-repeat`}
    >
      <div className="">
        <div className="container py-[80px]">
          <div className="text-body-2 mb-[30px] flex items-center justify-between border-b pb-[30px] text-white">
            <div>
              <Link href="/" locale={locale}>
                <Img src={'/vercel.svg'} width={100} height={80} />
              </Link>
            </div>
            <div className="flex items-center space-x-[10px]">
              <div className="flex">
                <DeviceMobileIcon width={50} />
                <div>
                  <p>+91 987-654-3210</p>
                  <p>example@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <LocationMarkerIcon width={50} />
                <div>
                  <p>Marmora Road Chi Minh City, Vietnam</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white">
            {FOOTER_LINK.map((fl, index) => {
              return (
                <div
                  key={index}
                  className={`inline-block h-full w-1/4 align-top ${
                    index !== 0 ? 'pl-[100px]' : ''
                  }`}
                >
                  <h1
                    className={[
                      'text-heading-4 relative mb-[30px] pb-[10px]',
                      BEFORE_TITLE,
                      AFTER_TITLE,
                    ].join(' ')}
                  >
                    {fl.title}
                  </h1>
                  {fl.description && <p>{fl.description}</p>}
                  {fl.links.length > 0 && (
                    <ul>
                      {fl.links.map((l) => {
                        return (
                          <li
                            key={l.href}
                            className="py-[5px] transition-all hover:pl-[10px]"
                          >
                            <a href={l.href}>{l.text}</a>
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
      </div>
      <div className="text-body-1 bg-[#b3a1ff] py-[15px] text-center text-white">
        Copyright © 2021 Xíu Review. All rights reserved.
      </div>
    </footer>
  );
}
