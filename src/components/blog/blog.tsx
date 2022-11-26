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
import { SimpleSlider } from './components/slide';
import Image from 'next/image';
import { Layout, Item } from 'components/layout/interface';
import END_POINTS from 'fetcher/endpoint';
import Link from 'next/link';

interface Props {
  tags: ITags;
  categories: Categories;
  blogs: Blogs;
  layout: Layout;
}

export default function Blog({ tags, categories, blogs, layout }: Props) {
  const router = useRouter();

  const handleChangePage = (page: number) => {
    router.push({
      pathname: '/blog',
      query: { ...router.query, page: page },
    });
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleChangeSize = () => {};

  const [page, pageCount, total, pageSize, sliderItem] = useMemo(
    () => [
      getDataFromObject(blogs, 'meta.pagination.page'),
      getDataFromObject(blogs, 'meta.pagination.pageCount'),
      getDataFromObject(blogs, 'meta.pagination.total'),
      getDataFromObject(blogs, 'meta.pagination.pageSize'),
      getDataFromObject(layout, 'data.attributes.slider.item'),
    ],
    [blogs, layout],
  );
  return (
    <div>
      <div className="mb-[40px] h-full max-h-[600px] ">
        <SimpleSlider>
          {(sliderItem || []).map((item: Item) => (
            <Link key={item.id} href={item.href}>
              <a className="w-full cursor-pointer">
                <div className="max-h-[600px]">
                  <Image
                    src={`${END_POINTS.BASE_URL}${item.imageUrl.data.attributes.url}`}
                    alt=""
                    width={'1200'}
                    height={'600'}
                    layout="responsive"
                  />
                </div>
              </a>
            </Link>
          ))}
        </SimpleSlider>
      </div>
      <div className="container px-[20px] md:flex md:p-0 md:pb-[30px]">
        <div className="mb-[30px] w-full md:mr-[30px] md:mb-0 md:w-2/3">
          {blogs &&
            blogs.data &&
            blogs.data.length > 0 &&
            blogs.data.map((b, i) => (
              <div key={i} className="inline-block w-full md:w-1/3">
                <SingleBlog blog={b} />
              </div>
            ))}
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
