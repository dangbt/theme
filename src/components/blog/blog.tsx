import Search from './components/search';
import React, { useMemo } from 'react';
import Category from './components/category';
import RecentPosts from './components/recent-posts';
import Archives from './components/archives';
import Tags from './components/tags';
import SingleBlog from './components/single-blog';
import Pagination from 'components/pagination';
import { Blogs, Categories, Tags as ITags } from 'interface';
import { getDataFromObject } from 'utils/get-data';
import { useRouter } from 'next/router';
import Breadcrumb from 'components/breadcrumb';

interface Props {
  tags: ITags;
  categories: Categories;
  blogs: Blogs;
}

export default function Blog({ tags, categories, blogs }: Props) {
  const router = useRouter();

  const handleChangePage = (page: number) => {
    router.push({
      pathname: '/blog',
      query: { ...router.query, page: page },
    });
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChangeSize = () => {};

  const [page, pageCount, total, pageSize] = useMemo(
    () => [
      getDataFromObject(blogs, 'meta.pagination.page'),
      getDataFromObject(blogs, 'meta.pagination.pageCount'),
      getDataFromObject(blogs, 'meta.pagination.total'),
      getDataFromObject(blogs, 'meta.pagination.pageSize'),
    ],
    [blogs],
  );
  return (
    <div>
      <div className="relative flex h-[400px] items-center bg-[url(https://samartheme1.vercel.app/images/banner/bnr1.jpg)] bg-cover bg-no-repeat opacity-75 after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-primary after:opacity-75">
        <div className="container relative z-10">
          <div className="text-[48px] text-white">Blog</div>
          <Breadcrumb />
        </div>
      </div>
      <div className="container mt-[150px] px-[20px] md:flex md:p-0 md:pb-[30px]">
        <div className="mb-[30px] w-full md:mr-[30px] md:mb-0 md:w-2/3">
          {blogs &&
            blogs.data &&
            blogs.data.length > 0 &&
            blogs.data.map((b, i) => <SingleBlog key={i} blog={b} />)}
          <div>
            {pageCount > 1 && (
              <Pagination
                page={page}
                totalPage={pageCount}
                handleChangePage={handleChangePage}
                handleChangeSize={handleChangeSize}
                total={total}
                size={pageSize || 2}
              />
            )}
          </div>
        </div>
        <div className=" w-full md:w-1/3">
          <div className="sticky top-[120px]">
            <div className="mb-[30px]">
              <Search />
            </div>
            <div className="mb-[30px]">
              <Category categories={categories} />
            </div>
            <div className="mb-[30px]">
              <RecentPosts />
            </div>
            <div className="mb-[30px]">
              <Archives />
            </div>
            <div className="mb-[30px]">
              <Tags tags={tags} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
