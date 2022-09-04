import qs from 'qs';

export const formatObjectToString = (object: any) => {
  return qs.stringify(object, { encodeValuesOnly: true });
};
