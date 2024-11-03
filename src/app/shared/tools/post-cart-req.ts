import { signal, WritableSignal } from '@angular/core';
import { Cart, CartItems } from '@shared/models/product/cart';
import { Product } from '@shared/models/product/product';
import { environment } from 'environments/environment';

export const postCartReq = (product: CartItems[]): Cart => {
  const cartReq: Cart = {
    items: product,
    clientSecret: environment.client,
    id: 'as12',
    paymentIntentId: '',
    deliveryMethodId: 0,
  };

  return cartReq;
};
