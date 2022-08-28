import { SearchIcon, ArrowRightIcon } from '@heroicons/react/solid';
import Button from 'components/button';
import React from 'react';

export default function Search() {
  return (
    <div className="group flex w-full items-center rounded-[20px] shadow-2">
      <div className="w-auto p-[10px]">
        <SearchIcon className="rotate-90 text-primary" width={20} />
      </div>
      <input
        placeholder="Search"
        className="w-full py-[5px] focus:outline-none"
      />
      <div className=" w-auto">
        <Button version="1">
          <ArrowRightIcon width={20} className="text-white" />
        </Button>
      </div>
    </div>
  );
}
