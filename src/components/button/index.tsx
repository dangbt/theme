import React from 'react';

interface Props {
  children: React.ReactNode;
  version?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button(props: Props) {
  switch (props.version) {
    case '1': {
      return (
        <button
          disabled={props.disabled}
          onClick={props.onClick}
          className="text-heading-6 rounded-[10px] bg-primary py-[10px] px-[30px]"
        >
          {props.children}
        </button>
      );
    }
    default: {
      return (
        <button
          disabled={props.disabled}
          onClick={props.onClick}
          className="text-heading-6 rounded-[10px] bg-bg-primary py-[10px] px-[30px] text-primary"
        >
          {props.children}
        </button>
      );
    }
  }
}
