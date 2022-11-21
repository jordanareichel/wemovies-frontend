import { api } from '../../connection/index';

export const getProducts = async (): Promise<any> => {
  return await api.get('/products');
};
