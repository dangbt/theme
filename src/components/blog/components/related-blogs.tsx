import Title from './title';
import React from 'react';
import SingleRelatedBlog from './single-related-blog';

export default function RelatedBlogs() {
  return (
    <div>
      <Title title="Related Blogs"></Title>
      <div className="mt-[20px] flex space-x-[30px]">
        <SingleRelatedBlog />
        <SingleRelatedBlog />
      </div>
    </div>
  );
}
