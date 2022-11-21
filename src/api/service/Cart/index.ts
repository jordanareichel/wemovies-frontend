import { api } from '../../connection/index';

import { CartResponse, ItemCode } from './types';

export const getCart = async (): Promise<any> => {
  return await api.get('/cart');
};

export const createOrUpdateCart = async (data: CartResponse): Promise<any> => {
  return await api.post('/cart', data);
};

export const deleteItem = async (data: ItemCode): Promise<any> => {
  const { code } = data;
  return await api.delete(`/cart/item/${code}`);
};

export const deleteAll = async (): Promise<any> => {
  return await api.delete('/cart/deleteAll');
};
