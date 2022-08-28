import Search from './components/search';
import React from 'react';
import Category from './components/category';
import RecentPosts from './components/recent-posts';
import Archives from './components/archives';
import Tags from './components/tags';
import SingleBlog from './components/single-blog';
import Pagination from 'components/pagination';

export default function Blog() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChangePage = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChangeSize = () => {};
  return (
    <div className="container mt-[150px] flex pb-[30px]">
      <div className="mr-[30px] w-2/3">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
        <div className="">
          <Pagination
            page={1}
            totalPage={20}
            handleChangePage={handleChangePage}
            handleChangeSize={handleChangeSize}
            total={100}
            size={20}
          />
        </div>
      </div>
      <div className="w-1/3">
        <div className="sticky top-[120px]">
          <div className="mb-[30px]">
            <Search />
          </div>
          <div className="mb-[30px]">
            <Category />
          </div>
          <div className="mb-[30px]">
            <RecentPosts />
          </div>
          <div className="mb-[30px]">
            <Archives />
          </div>
          <div className="mb-[30px]">
            <Tags />
          </div>
        </div>
      </div>
    </div>
  );
}
