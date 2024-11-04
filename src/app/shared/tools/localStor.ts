import { CartItems } from '@shared/models/product/cart';
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
