import { get } from 'fetcher';
import { formatObjectToString } from 'utils/format-query';
import END_POINTS from './endpoint';

export const getLayoutData = () => {
  return get({ url: END_POINTS.LAYOUT });
};

export const getTags = () => {
  return get({ url: END_POINTS.TAG });
};

export const getCategory = () => {
  return get({ url: END_POINTS.CATEGORY });
};

export const getBlogs = (objectQuery: any) => {
  const url = `${END_POINTS.BLOG}?populate=*&&${formatObjectToString(
    objectQuery,
  )}`;
  return get({ url });
};

export const getBlogDetail = (slug: string) => {
  const filters = {
    filters: {
      slug: {
        $eq: slug,
      },
    },
  };
  const url = `${END_POINTS.BLOG}?populate=*&&${formatObjectToString(filters)}`;
  return get({ url });
};
