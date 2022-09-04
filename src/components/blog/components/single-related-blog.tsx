import React from 'react';
import {
  ClockIcon,
  UserIcon,
  ShareIcon,
  ChatIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';

export default function SingleRelatedBlog() {
  return (
    <div className=" mb-[30px] cursor-pointer rounded-[10px] shadow-1">
      <div className="rounded-t-[10px]">
        <Image
          src="https://samartheme1.vercel.app/images/blog/default/thum1.jpg"
          alt=""
          width="750px"
          height="350px"
          layout="responsive"
          className="rounded-t-[10px] transition-all"
        />
      </div>
      <div className="p-[30px] text-center">
        <h1 className="text-heading-5 mb-[15px]">
          Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor.
        </h1>
        <p className="text-body-1">
          Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi
          feugiat ante velit, eget convallis arcu iaculis vel.
        </p>
        <div className="my-[20px] border-t border-[#e1e1f0]" />
        <div className="flex items-center justify-between">
          <div className="flex space-x-[20px]">
            <div className="flex space-x-[10px]">
              <ClockIcon className="text-primary" width={20} />
              <span>7 March, 2020</span>
            </div>
          </div>
          <div className="flex space-x-[20px]">
            <div className="flex space-x-[10px]">
              <ChatIcon className="text-primary" width={20} />
              <span>15</span>
            </div>
            <div className="flex space-x-[10px]">
              <ShareIcon className="text-primary" width={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
