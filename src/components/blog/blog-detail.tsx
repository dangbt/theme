import Search from './components/search';
import React from 'react';
import Category from './components/category';
import RecentPosts from './components/recent-posts';
import Archives from './components/archives';
import Tags from './components/tags';
import BlogDetailComponent from './components/blog-detail';
import RelatedBlogs from './components/related-blogs';
import { Blog, Categories, Tag, Tags as ITags } from 'interface';
import { getDataFromObject } from 'utils/get-data';

interface Props {
  tags: ITags;
  categories: Categories;
  blog: Blog;
}

export default function BlogDetail({ tags, categories, blog }: Props) {
  const tagsOfBlog = getDataFromObject(blog, 'data.attributes.tags');

  return (
    <div className="container mt-[150px] px-[20px] md:flex md:p-0 md:pb-[30px]">
      <div className="mb-[30px] w-full md:mr-[30px] md:mb-0 md:w-2/3">
        <BlogDetailComponent blog={blog} />
        <div className="my-[20px] border-t border-[#e1e1f0]" />
        <div className="mb-[50px]">
          Tags:{' '}
          {tagsOfBlog.data.length > 0 &&
            tagsOfBlog.data.map(
              (t: Tag) => `#${getDataFromObject(t, 'attributes.name')} `,
            )}
        </div>
        <RelatedBlogs />
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
  );
}
