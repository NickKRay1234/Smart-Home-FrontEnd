import { Cart, CartItems } from '@shared/models/product/cart';
import { Product } from '@shared/models/product/product';

export const localStor = (product: Product): CartItems[] => {
  const { productId, productName, productPrice, images } = product;

  const currentItem: CartItems = {
    productId,
    productName,
    price: productPrice,
    quantity: 1,
    pictureUrl: images[0].imageUrl,
  };

  updateLocalStor(currentItem);
  return JSON.parse(localStorage.getItem('items')!);
};

export function updateLocalStor(cart: CartItems): void {
  let isInStorage = false;

  if (!localStorage.getItem('items')) {
    localStorage.setItem('items', JSON.stringify(cart));
  } else {
    let localStor = JSON.parse(localStorage.getItem('items')!);
    localStor.forEach((item: CartItems) => {
      if (item.productId === cart.productId) {
        item.quantity += 1;
        item.price += item.price;
        isInStorage = true;
      }
    });

    if (isInStorage) {
      localStorage.setItem('items', JSON.stringify([...localStor]));
    } else {
      localStorage.setItem('items', JSON.stringify([...localStor, cart]));
    }
  }
}

export function increaseLocalStor() {
  const cart = localStorage.getItem('items');
  let cartParsed: CartItems[] = [];
  if (cart) {
    cartParsed = JSON.parse(cart);
  }

  cartParsed.forEach((item: CartItems) => {
    item.quantity += 1;
    item.price += item.price;
  });

  localStorage.setItem('items', JSON.stringify(cartParsed));
}
export function decreaseLocalStor() {
  const cart = localStorage.getItem('items');
  let cartParsed: CartItems[] = [];
  if (cart) {
    cartParsed = JSON.parse(cart);
  }

  cartParsed.forEach((item: CartItems) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      item.price -= item.price;
    }
  });

  localStorage.setItem('items', JSON.stringify(cartParsed));
}

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
  const carts: CartItems[] = JSON.parse(localStorage.getItem('items')!);
  if (carts) {
    total = carts.reduce((a: number, b: CartItems) => a + b.price, 0);
    localStorage.setItem('total', JSON.stringify({ total }));
  }
  console.log(total);
  return total;
};
