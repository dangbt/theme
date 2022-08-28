import React from 'react';

const BEFORE_TITLE =
  'before:absolute before:left-0 before:w-[5px] before:h-full before:bg-primary before:rounded-[5px]';

export default function Title({ title }: { title: string }) {
  return (
    <h1
      className={[BEFORE_TITLE, 'text-heading-4 relative pl-[20px]'].join(' ')}
    >
      {title}
    </h1>
  );
}
