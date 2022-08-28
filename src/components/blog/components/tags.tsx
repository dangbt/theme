import Title from './title';
import React from 'react';

interface SinglePost {
  text: string;
}

const SingleTag = ({ text }: SinglePost) => {
  return (
    <div className="mt-[5px] ml-[10px] inline-flex cursor-pointer items-center rounded-[20px] border border-secondary p-[4px]">
      <p className="h-[20px] w-[20px] rounded-hafl bg-secondary"></p>
      <p className="px-[10px]">{text}</p>
    </div>
  );
};

export default function Tags() {
  return (
    <div>
      <Title title="Tags"></Title>
      <div className="mt-[15px] -ml-[10px]">
        <SingleTag text={'Bussiness'} />
        <SingleTag text={'Intenal'} />
        <SingleTag text={'Bussiness'} />
        <SingleTag text={'News'} />
        <SingleTag text={'SEO'} />
      </div>
    </div>
  );
}
