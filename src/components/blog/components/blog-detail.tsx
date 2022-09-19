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
import MarkdownView from 'react-showdown';
import style from './blogdetail.module.css';

interface Props {
  blog: Blog;
}

export default function BlogDetailComponent({ blog }: Props) {
  const [logo, name, description, createdAt, username] = useMemo(
    () => [
      getDataFromObject(blog, 'attributes.thumnail.data.attributes.url'),
      getDataFromObject(blog, 'attributes.name'),
      getDataFromObject(blog, 'attributes.description'),
      formatDate(new Date(getDataFromObject(blog, 'attributes.createdAt'))),
      getDataFromObject(
        blog,
        'attributes.users_permissions_user.data.attributes.username',
      ),
    ],
    [blog],
  );
  if (!logo || !name || !description) return null;

  const formartedDesc = description
    .split('(')
    .map((d: string) => {
      if (d.includes('/uploads/')) {
        return `${END_POINTS.BASE_URL}${d}`;
      }
      return d;
    })
    .join('(');

  return (
    <div className="">
      <div className="mb-[30px] rounded-[10px] ">
        <Image
          src={`${END_POINTS.BASE_URL}${logo}`}
          alt={logo}
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
      <div className="p-[30px]">
        <h1 className="text-heading-4 mb-[15px] text-center">{name}</h1>
        <div className={style.blogDetailContent}>
          <MarkdownView markdown={formartedDesc} />
        </div>
      </div>
    </div>
  );
}
