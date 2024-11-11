import { Cart, CartItems } from '@shared/models/product/cart';
import { environment } from 'environments/environment';

export const postCartReq = (product: CartItems[]): Cart => {
  const cartReq: Cart = {
    items: product,
    clientSecret: environment.clientId,
    id: 'as12',
    paymentIntentId: '',
    deliveryMethodId: 0,
  };

  return cartReq;
};
