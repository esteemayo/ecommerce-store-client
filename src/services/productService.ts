import http from './httpService';

const apiEndpoint = '/products';

export const getFeaturedProducts = () =>
  http.get(`${apiEndpoint}?featured=true`);
