export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

// SINGLE

export interface Tag {
  id: string;
  attributes: {
    name: string;
  };
}
export interface Category {
  id: string;
  attributes: {
    name: string;
  };
}

export interface Thumnail {
  id: number;
  attributes: {
    name: string;
  };
  formats: {
    large: {
      url: string;
    };
    medium: {
      url: string;
    };
    small: {
      url: string;
    };
    thumnail: {
      url: string;
    };
  };
}
export interface User {
  id: number;
  attributes: {
    username: string;
  };
}

export interface Blog {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    name: string;
    description: string;
    sort_description: string;
    tag: Tag[];
    categories: Category[];
    thumnail: Thumnail;
    users_permissions_user: User;
  };
}

// MULTI

export interface Tags {
  data: Tag[];
  meta: Meta;
}

export interface Categories {
  data: Category[];
  meta: Meta;
}

export interface Blogs {
  data: Blog[];
  meta: Meta;
}

export interface MetaTag {
  description: string;
  modifiedTime: string;
  publishedTime: string;
  siteName: string;
  title: string;
  url: string;
  image: string;
  publisher: string;
}
