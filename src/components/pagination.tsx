import { FILTER_DEFAULT } from 'contants/filter';
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Button from 'components/button';

interface Props {
  page: number;
  totalPage: number;
  handleChangePage: (page: number) => void;
  handleChangeSize: (size: number) => void;
  total: number;
  size: number;
}

const getPages = ({
  page,
  totalPage,
}: {
  page: Props['page'];
  totalPage: Props['totalPage'];
}): number[] => {
  switch (page) {
    case 1: {
      if (totalPage === 1 || totalPage === 0) {
        return [];
      }
      if (totalPage === 2) {
        return [page, page + 1];
      }
      if (totalPage > 2) {
        return [page, page + 1, page + 2];
      } else {
        return [page, page + 1];
      }
    }
    case totalPage: {
      if (totalPage === 1) {
        return [];
      }
      if (totalPage === 2) {
        return [1, 2];
      }
      return [totalPage - 2, totalPage - 1, totalPage];
    }
    default: {
      if (totalPage === 1) {
        return [];
      }
      if (totalPage === 2) {
        return [page, page + 1];
      }
      return [page - 1, page, page + 1];
    }
  }
};

export default function Pagination({
  totalPage,
  handleChangePage,
  handleChangeSize,
  page,
  total,
  size,
}: Props) {
  const handleChange = (p: Props['page']) => {
    if (p === page) {
      return;
    }
    handleChangePage(p);
  };

  const handleSelectSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleChangeSize(Number(e.target.value));
  };

  const renderButton = () => {
    return getPages({ page, totalPage }).map((p) => {
      const actived = page === p;
      if (actived) {
        return (
          <Button version="1" key={p} onClick={() => handleChange(p)}>
            <span className="text-white">{p}</span>
          </Button>
        );
      }
      return (
        <Button key={p} onClick={() => handleChange(p)}>
          {p}
        </Button>
      );
    });
  };
  return (
    <div className="flex items-center justify-center space-x-[10px]">
      <Button disabled={page === 1} onClick={() => handleChangePage(1)}>
        <ChevronLeftIcon width={20} />
      </Button>
      {renderButton()}
      <Button
        disabled={page === totalPage || totalPage === 0}
        onClick={() => handleChangePage(totalPage)}
      >
        <ChevronRightIcon width={20} />
      </Button>
      {/* <Box>
        <Select
          border="1px"
          value={size || FILTER_DEFAULT.size}
          onChange={handleSelectSize}
        >
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </Select>
      </Box> */}
    </div>
  );
}
