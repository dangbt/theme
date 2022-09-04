import Title from './title';
import React from 'react';
import Badge from 'components/badge';
import { Categories } from 'interface';
import { getDataFromObject } from 'utils/get-data';
import { useRouter } from 'next/router';

interface Props {
  categories: Categories;
}
export default function Category({ categories }: Props) {
  const router = useRouter();

  const handleClick = (name: string) => () => {
    router.push({
      pathname: '/blog',
      query: {
        ...router.query,
        category: name,
        page: 1,
      },
    });
  };

  return (
    <div>
      <Title title="Category"></Title>
      <div className="mt-[20px]">
        <ul className="cursor-pointer">
          <li
            onClick={handleClick('')}
            className="group flex items-center justify-between rounded-[20px] px-[20px] py-[10px] transition-all duration-200 hover:shadow-1"
          >
            <p className="flex-1">Tất cả</p>
            <Badge>01</Badge>
          </li>
          {categories.data &&
            categories.data.length > 0 &&
            categories.data.map((c, i) => {
              return (
                <li
                  key={i}
                  onClick={handleClick(getDataFromObject(c, 'attributes.name'))}
                  className="group flex items-center justify-between rounded-[20px] px-[20px] py-[10px] transition-all duration-200 hover:shadow-1"
                >
                  <p className="flex-1">
                    {getDataFromObject(c, 'attributes.name')}
                  </p>
                  <Badge>01</Badge>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
