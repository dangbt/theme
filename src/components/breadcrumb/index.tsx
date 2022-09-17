import React from 'react';
import Link from 'next/link';

export default function Breadcrumb() {
  return (
    <div className="">
      <ul className="flex items-center space-x-[32px] text-[15px] font-bold text-white">
        <li className="relative cursor-pointer after:absolute after:right-[-32px] after:top-[0px] after:h-[24px]  after:w-[24px] after:text-[15px] after:content-['>']">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>Blog</li>
      </ul>
    </div>
  );
}
