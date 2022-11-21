import { api } from '../../connection/index';

import { PaymentResponse } from './types';

export const createOrUpdatePayment = async (
  data: PaymentResponse,
): Promise<any> => {
  return await api.post('/payment', data);
};
