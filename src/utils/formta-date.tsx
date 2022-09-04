import { format } from 'date-fns';

export const formatDate = (date: any, formatString = 'PP') => {
  if (date) {
    return format(date, formatString);
  }
  return format(new Date(), formatString);
};
