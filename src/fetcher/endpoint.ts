const END_POINTS = {
  LAYOUT:
    '/api/webdanhgia?populate[header][populate][0]=links&&populate[header][populate][1]=logo&&populate[footer][populate][2]=logo&&populate[footer][populate][3]=box.links',

  TAG: '/api/tags',
  CATEGORY: '/api/categories',
  BLOG: '/api/blogs',

  BASE_URL: process.env.BASE_URL,
};

export default END_POINTS;
