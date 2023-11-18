import http from './httpService';

const apiEndpoint = '/products';

export const getFeaturedProducts = () =>
  http.get(`${apiEndpoint}?featured=true`);

export const getCategoryCount = () =>
  http.get(`${apiEndpoint}/count-by-category`);
