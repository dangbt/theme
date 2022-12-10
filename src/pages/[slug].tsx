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
  if (params && params.slug) {
    promise.push(getBlogDetail(params.slug as string));
  }
  const [layout, tags, categories, blogs] = await Promise.all(promise);
  const blog = blogs.data[0];

  const metaTag: MetaTag = {
    siteName: `${getDataFromObject(blog, 'attributes.name')}`,
    url: `/blog/${getDataFromObject(blog, 'attributes.slug')}`,
    title: `${getDataFromObject(blog, 'attributes.name')}`,
    description: getDataFromObject(blog, 'attributes.sort_description'),
    publishedTime: getDataFromObject(blog, 'attributes.publishedAt'),
    modifiedTime: getDataFromObject(blog, 'attributes.updatedAt'),
    image: getDataFromObject(
      blog,
      'attributes.thumnail.data.attributes.formats.small.url',
    ),
    publisher: getDataFromObject(
      blog,
      'attributes.users_permissions_user.data.attributes.username',
    ),
  };

  // Pass data to the page via props
  return { props: { layout, tags, categories, blog, metaTag } };
};
