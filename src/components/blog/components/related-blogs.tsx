import Title from './title';
import React from 'react';
import SingleRelatedBlog from './single-related-blog';

export default function RelatedBlogs() {
  return (
    <div>
      <Title title="Related Blogs"></Title>
      <div className="mt-[20px] flex flex-col space-x-[30px] md:flex-row">
        <SingleRelatedBlog />
        <SingleRelatedBlog />
      </div>
    </div>
  );
}
