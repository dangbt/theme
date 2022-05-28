import React, { HTMLAttributes } from 'react';

export enum TYPE_ANIMATION {
  translate,
  shadow,
  custom,
}

interface Props {
  children: React.ReactNode;
  typeAnimation: TYPE_ANIMATION;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

export default function Box(props: Props) {
  let animationClass: HTMLAttributes<HTMLDivElement>['className'] = '';
  switch (props.typeAnimation) {
    case TYPE_ANIMATION.translate: {
      animationClass = 'hover:translate-y-[-15px] shadow-1';
      break;
    }
    case TYPE_ANIMATION.shadow: {
      animationClass = 'hover:shadow-1';
      break;
    }
    case TYPE_ANIMATION.custom: {
      animationClass = props.className;
      break;
    }
  }
  return (
    <div
      className={[
        'rounded-[10px] bg-white p-[30px] transition-all duration-500 ease-in',
        animationClass,
      ].join(' ')}
    >
      {props.children}
    </div>
  );
}
