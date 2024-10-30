export interface Cart {
  id: string;
  items: CartItems[];
  deliveryMethodId: number;
  clientSecret: string;
  paymentIntentId: string;
}

export interface CartResponse {
  data: Cart;
  isSuccess: boolean;
  message: string;
}

export interface CartItems {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
}
