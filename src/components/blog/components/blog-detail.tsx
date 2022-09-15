import React, { useMemo } from 'react';
import {
  ClockIcon,
  UserIcon,
  ShareIcon,
  ChatIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import { Blog } from 'interface';
import END_POINTS from 'fetcher/endpoint';
import { getDataFromObject } from 'utils/get-data';
import { formatDate } from 'utils/formta-date';

interface Props {
  blog: Blog;
}

export default function BlogDetailComponent({ blog }: Props) {
  const [logo, name, description, createdAt, username] = useMemo(
    () => [
      getDataFromObject(blog, 'data.attributes.thumnail.data.attributes.url'),
      getDataFromObject(blog, 'data.attributes.name'),
      getDataFromObject(blog, 'data.attributes.description'),
      formatDate(
        new Date(getDataFromObject(blog, 'data.attributes.createdAt')),
      ),
      getDataFromObject(
        blog,
        'data.attributes.users_permissions_user.data.attributes.username',
      ),
    ],
    [blog],
  );
  if (!logo || !name || !description) return null;
  return (
    <div className="">
      <div className="mb-[30px] rounded-[10px] ">
        <Image
          src={`${END_POINTS.BASE_URL}${logo}`}
          alt=""
          width="750px"
          height="350px"
          layout="responsive"
          className="rounded-[10px]"
        />
      </div>
      <div className="mb-[30px flex items-center justify-between">
        <div className="flex space-x-[20px]">
          <div className="flex space-x-[10px]">
            <ClockIcon className="text-primary" width={20} />
            <span>{createdAt}</span>
          </div>
          <div className="flex space-x-[10px]">
            <UserIcon className="text-primary" width={20} />
            <span>By {username}</span>
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
      <div className="p-[30px] text-center">
        <h1 className="text-heading-4 mb-[15px]">{name}</h1>
        <p className="text-body-1">{description}</p>
      </div>
    </div>
  );
}
