import React from 'react';
import BlogDetail from 'components/blog/blog-detail';
import {
  getBlogDetail,
  getCategory,
  getLayoutData,
  getTags,
} from 'fetcher/fetcher';
import { Blog, Categories, Tags, MetaTag } from 'interface';
import { GetServerSideProps } from 'next';
import { getDataFromObject } from 'utils/get-data';

interface Props {
  tags: Tags;
  categories: Categories;
  blog: Blog;
  metaTag: MetaTag;
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

  const metaTag: MetaTag = {
    siteName: `${getDataFromObject(blog, 'data.attributes.name')}`,
    url: `/blog/${getDataFromObject(blog, 'data.id')}`,
    title: `${getDataFromObject(blog, 'data.attributes.name')}`,
    description: getDataFromObject(blog, 'data.attributes.sort_description'),
    publishedTime: getDataFromObject(blog, 'data.attributes.publishedAt'),
    modifiedTime: getDataFromObject(blog, 'data.attributes.updatedAt'),
    image: getDataFromObject(
      blog,
      'data.attributes.thumnail.data.attributes.formats.small.url',
    ),
    publisher: getDataFromObject(
      blog,
      'data.attributes.users_permissions_user.data.attributes.username',
    ),
  };

  // Pass data to the page via props
  return { props: { layout, tags, categories, blog, metaTag } };
};
