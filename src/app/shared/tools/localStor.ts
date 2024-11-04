import { Cart, CartItems } from '@shared/models/product/cart';
import { Product } from '@shared/models/product/product';

export const localStor = (product: Product): CartItems[] => {
  const { productId, productName, productPrice, images } = product;
  let isInStorage = false;

  const currentItem: CartItems[] = [
    {
      productId,
      productName,
      price: productPrice,
      quantity: 1,
      pictureUrl: images[0].imageUrl,
    },
  ];

  if (!localStorage.getItem('items')) {
    localStorage.setItem('items', JSON.stringify(currentItem));
  } else {
    let localStor = JSON.parse(localStorage.getItem('items')!);
    localStor.forEach((item: CartItems) => {
      if (item.productId === currentItem[0].productId) {
        item.quantity += 1;
        item.price += item.price;
        isInStorage = true;
      }
    });
    console.log(localStor);
    if (isInStorage) {
      localStorage.setItem('items', JSON.stringify([...localStor]));
    } else {
      localStorage.setItem(
        'items',
        JSON.stringify([...localStor, ...currentItem])
      );
    }
  }

  return JSON.parse(localStorage.getItem('items')!);
};

export const localStorDel = (prod: CartItems) => {
  if (localStorage.getItem('items')) {
    let cart = JSON.parse(localStorage.getItem('items')!).filter(
      (item: CartItems) => item.productId !== prod.productId
    );
    localStorage.setItem('items', JSON.stringify(cart));
    return cart;
  }
};

export const totalInCart = () => {
  let total = 0;
  const carts: CartItems[] = JSON.parse(
    localStorage.getItem('items')!
  ) as CartItems[];
  if (carts) {
    total = carts.reduce((a: number, b: CartItems) => a + b.price, 0);
    localStorage.setItem('total', JSON.stringify({ total }));
  }
  console.log(total);
  return total;
};
