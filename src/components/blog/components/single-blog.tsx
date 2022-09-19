import React, { useMemo } from 'react';
import {
  ClockIcon,
  UserIcon,
  ShareIcon,
  ChatIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import { getDataFromObject } from 'utils/get-data';
import { formatDate } from 'utils/formta-date';
import END_POINTS from 'fetcher/endpoint';
import { Blog } from 'interface';
import { useRouter } from 'next/router';

interface Props {
  blog: Blog;
}

export default function SingleBlog({ blog }: Props) {
  const router = useRouter();

  const [logo, name, sortDescription, createdAt, username, slug] = useMemo(
    () => [
      getDataFromObject(blog, 'attributes.thumnail.data.attributes.url'),
      getDataFromObject(blog, 'attributes.name'),
      getDataFromObject(blog, 'attributes.sort_description'),
      formatDate(new Date(getDataFromObject(blog, 'attributes.createdAt'))),
      getDataFromObject(
        blog,
        'attributes.users_permissions_user.data.attributes.username',
      ),
      getDataFromObject(blog, 'attributes.slug'),
    ],
    [blog],
  );

  const handleClick = () => {
    router.push(`/blog/${slug}`);
  };
  if (!logo || !name || !sortDescription) return null;

  return (
    <div
      onClick={handleClick}
      className="group mb-[30px] cursor-pointer rounded-[10px] shadow-1"
    >
      <div className="rounded-t-[10px] group-hover:rounded-t-[10px]">
        <Image
          src={`${END_POINTS.BASE_URL}${logo}`}
          alt=""
          width="750px"
          height="350px"
          layout="responsive"
          className="rounded-t-[10px] transition-all group-hover:scale-125 group-hover:rounded-t-[10px]"
        />
      </div>
      <div className="p-[30px] text-center">
        <h1 className="text-heading-4 mb-[15px]">{name}</h1>
        <p className="text-body-1">{sortDescription}</p>
        <div className="my-[20px] border-t border-[#e1e1f0]" />
        <div className="flex items-center justify-between">
          <div className="flex space-x-[20px]">
            <div className="flex space-x-[10px]">
              <ClockIcon className="text-primary" width={20} />
              <span>{createdAt}</span>
            </div>
            <div className="flex space-x-[10px]">
              <UserIcon className="text-primary" width={20} />
              <span>{username}</span>
            </div>
          </div>
          <div className="flex space-x-[20px]">
            {/* <div className="flex space-x-[10px]">
              <ChatIcon className="text-primary" width={20} />
              <span>15</span>
            </div> */}
            <div className="flex space-x-[10px]">
              <ShareIcon className="text-primary" width={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
