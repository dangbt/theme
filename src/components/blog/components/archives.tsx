import Title from './title';
import React from 'react';
import Badge from 'components/badge';

const DESIGN_LIST = [
  {
    text: 'Design',
    value: '05',
  },
  {
    text: 'Development',
    value: '05',
  },
  {
    text: 'SEO',
    value: '05',
  },
  {
    text: 'App design',
    value: '05',
  },
];
export default function Archives() {
  return (
    <div>
      <Title title="Archives"></Title>
      <div className="mt-[20px]">
        <ul className="cursor-pointer">
          {DESIGN_LIST.map((d) => (
            <li
              key={d.text}
              className="group flex items-center justify-between rounded-[20px] px-[20px] py-[10px] transition-all duration-200 hover:shadow-1"
            >
              <p className="flex-1">{d.text}</p>
              <Badge>{d.value}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
