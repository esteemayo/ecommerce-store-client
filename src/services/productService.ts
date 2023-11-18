import http from './httpService';

const apiEndpoint = '/products';

export const getProducts = () => http.get(apiEndpoint);

export const getCategoryCount = () =>
  http.get(`${apiEndpoint}/count-by-category`);
  
export const getFeaturedProducts = () =>
  http.get(`${apiEndpoint}?featured=true`);
