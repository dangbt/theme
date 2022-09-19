import axios from 'axios';

enum Methods {
  GET = 'get',
  POST = 'post',
}

interface RequestApi {
  method: Methods;
  url: string;
}

interface GetApi {
  url: RequestApi['url'];
}

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
});

export const get = ({ url }: GetApi) => {
  return instance({
    method: Methods.GET,
    url,
  }).then(async (res) => {
    const data = await res.data;
    return data;
  });
};

interface PostApi<T> {
  url: RequestApi['url'];
  data: T;
}

export const post = <T,>({ url, data }: PostApi<T>) => {
  return instance({
    method: Methods.POST,
    url,
    data,
  });
};
