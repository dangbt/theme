import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Button(props: Props) {
  return (
    <button className="text-heading-6 rounded-[10px] bg-bg-primary py-[10px] px-[30px] text-primary">
      {props.children}
    </button>
  );
}
