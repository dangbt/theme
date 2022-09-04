import React from 'react';
import Blog from 'components/blog/blog';
import { getBlogs, getCategory, getLayoutData, getTags } from 'fetcher/fetcher';
import { Blogs, Categories, Tags } from 'interface';
import { GetServerSideProps } from 'next/types';

interface Props {
  tags: Tags;
  categories: Categories;
  blogs: Blogs;
}

export default function BlogPage(props: Props) {
  return <Blog {...props} />;
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const { query } = context;
  const pagination = {
    page: '1',
    pageSize: '2',
  };

  const filters: any = {
    filters: {},
    pagination: pagination,
  };
  let categoriesFilter;
  let tagsFilter;
  if (query && query.category) {
    categoriesFilter = {
      name: {
        $eq: query.category as string,
      },
    };
  }
  if (query && query.tag) {
    tagsFilter = {
      name: {
        $eq: query.tag as string,
      },
    };
  }

  if (query && query.page) {
    pagination.page = query.page as string;
  }
  if (query && query.pageSize) {
    pagination.pageSize = query.pageSize as string;
  }
  filters.pagination = pagination;

  filters.filters = {
    categories: categoriesFilter,
    tags: tagsFilter,
  };
  const [layout, tags, categories, blogs] = await Promise.all([
    getLayoutData(),
    getTags(),
    getCategory(),
    getBlogs(filters),
  ]);
  // Pass data to the page via props
  return { props: { layout, tags, categories, blogs } };
};
