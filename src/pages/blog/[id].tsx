import React from 'react';
import BlogDetail from 'components/blog/blog-detail';
import {
  getBlogDetail,
  getCategory,
  getLayoutData,
  getTags,
} from 'fetcher/fetcher';
import { Blog, Categories, Tags } from 'interface';
import { GetServerSideProps } from 'next';

interface Props {
  tags: Tags;
  categories: Categories;
  blog: Blog;
}
export default function BlogPage(props: Props) {
  return <BlogDetail {...props} />;
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const { params } = context;

  const promise = [getLayoutData(), getTags(), getCategory()];
  if (params && params.id) {
    promise.push(getBlogDetail(params.id as string));
  }
  const [layout, tags, categories, blog] = await Promise.all(promise);
  // Pass data to the page via props
  return { props: { layout, tags, categories, blog } };
};
