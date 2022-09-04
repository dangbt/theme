import Title from './title';
import React from 'react';
import { Tags as ITags } from 'interface';
import { getDataFromObject } from 'utils/get-data';
import { useRouter } from 'next/router';

interface SinglePost {
  text: string;
  onClick: () => void;
}

const SingleTag = ({ text, onClick }: SinglePost) => {
  return (
    <div
      onClick={onClick}
      className="mt-[5px] ml-[10px] inline-flex cursor-pointer items-center rounded-[20px] border border-secondary p-[4px]"
    >
      <p className="h-[20px] w-[20px] rounded-hafl bg-secondary"></p>
      <p className="px-[10px]">{text}</p>
    </div>
  );
};

interface Props {
  tags: ITags;
}

export default function Tags({ tags }: Props) {
  const router = useRouter();
  const handleClick = (name: string) => () => {
    router.push({
      pathname: '/blog',
      query: { ...router.query, tag: name, page: 1 },
    });
  };

  return (
    <div>
      <Title title="Tags"></Title>
      <div className="mt-[15px] -ml-[10px]">
        {tags.data &&
          tags.data.length > 0 &&
          tags.data.map((t, i) => (
            <SingleTag
              onClick={handleClick(getDataFromObject(t, 'attributes.name'))}
              key={i}
              text={getDataFromObject(t, 'attributes.name')}
            />
          ))}
      </div>
    </div>
  );
}
