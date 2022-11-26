import React, { useEffect, useMemo, useState } from 'react';
import Img from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getDataFromObject } from 'utils/get-data';
import END_POINTS from 'fetcher/endpoint';
import { HeaderInterface } from './interface';
export interface HeaderProps {
  header: HeaderInterface;
}

export default function Header({ header }: HeaderProps) {
  const [sticky, setSticky] = useState(false);
  const { locale } = useRouter();
  useEffect(() => {
    function doSomeThing() {
      if (window.scrollY !== 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    document.addEventListener('scroll', doSomeThing);
    return () => {
      document.removeEventListener('scroll', doSomeThing);
    };
  }, []);
  const stickyCss = useMemo(() => {
    if (sticky) {
      return 'shadow-1 bg-white fixed';
    }
    return 'bg-transparent';
  }, [sticky]);

  const logo = getDataFromObject(
    header,
    'logo.data.attributes.formats.thumbnail.url',
  );
  const links: HeaderInterface['links'] = getDataFromObject(header, 'links');

  return (
    <header
      className={['top-0 left-0 right-0 z-10 transition-all', stickyCss].join(
        ' ',
      )}
    >
      <div className="container flex items-center justify-between ">
        {logo && (
          <div className="cursor-pointer">
            <Link href="/" locale={locale}>
              <Img
                src={`${END_POINTS.BASE_URL}${logo}`}
                width={100}
                height={80}
              />
            </Link>
          </div>
        )}
        <div>
          <ul className="flex cursor-pointer items-center space-x-[30px]">
            {links &&
              links.length > 0 &&
              links.map((h) => {
                const hasChild = h.child && h.child.length > 0;
                const hasAnimation = hasChild ? 'group' : '';
                return (
                  <li
                    className={['relative', hasAnimation].join(' ')}
                    key={h.text}
                  >
                    <div className="flex items-center py-[30px]">
                      <Link href={h.href} locale={locale}>
                        <a className="inline-block font-semibold group-hover:animate-up-to-down">
                          {h.text}
                        </a>
                      </Link>
                      {hasChild && <ChevronDownIcon width={20} height={20} />}
                    </div>
                    {hasChild && (
                      <ul className="absolute mt-[20px] h-0 overflow-auto bg-white py-[2px] opacity-0 transition-all group-hover:mt-0 group-hover:h-auto group-hover:overflow-visible group-hover:opacity-100">
                        {h.child &&
                          h.child.length > 0 &&
                          h.child.map((i) => (
                            <li
                              className=" relative whitespace-nowrap shadow-2"
                              key={`${i.text} ${h.text}`}
                            >
                              <Link href={i.href} locale={locale}>
                                <a
                                  className={[
                                    'inline-block w-[200px] px-[30px] py-[10px]  duration-300  hover:pl-[50px] hover:text-primary',
                                    `after:absolute after:top-[22px] after:left-[28px]
                                after:h-[2px] after:w-[0px]  
                                after:bg-primary after:transition-all after:content-[''] hover:after:w-[15px]`,
                                  ].join(' ')}
                                >
                                  {i.text}
                                </a>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </header>
  );
}
