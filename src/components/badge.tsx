import React from 'react';
interface Props {
  children: React.ReactNode;
}
export default function Badge(props: Props) {
  return (
    <span className="cursor-default rounded-hafl bg-bg-primary py-[5px] px-[10px] hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white">
      {props.children}
    </span>
  );
}
