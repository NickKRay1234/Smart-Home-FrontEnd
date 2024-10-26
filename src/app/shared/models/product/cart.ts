export interface Cart {
  id: string;
  items: [
    {
      productId: number;
      productName: string;
      price: number;
      quantity: number;
      pictureUrl: string;
    }
  ];
  deliveryMethodId: number;
  clientSecret: string;
  paymentIntentId: string;
}

export interface CartResponse extends Cart {
  isSuccess: boolean;
  message: string;
}
