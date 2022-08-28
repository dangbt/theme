import Title from './title';
import React from 'react';
import Image from 'next/image';

const SinglePost = () => {
  return (
    <div className="group flex cursor-pointer items-center space-x-[10px] rounded-[10px] p-[10px] hover:shadow-1">
      <div className="h-[100px] w-[120px]  rounded-[10px]">
        <Image
          src={
            'https://samartheme1.vercel.app/images/blog/recent-blog/pic1.jpg'
          }
          alt=""
          width={120}
          height={100}
          className="rounded-[10px]"
          layout="responsive"
        />
      </div>
      <div className="flex-1">
        <p className="text-heading-6 mb-[8px] group-hover:text-primary">
          Fusce mollis felis quis tristique
        </p>
        <p className="text-body-3">7 March, 2020</p>
      </div>
    </div>
  );
};

export default function RecentPosts() {
  return (
    <div>
      <Title title="Recent Posts"></Title>
      <div className="mt-[20px]">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
}
