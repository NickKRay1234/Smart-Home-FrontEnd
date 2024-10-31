import { Product } from '@shared/models/product/product';

export const randomAdv = (products: Product[]): Product[] => {
  const randomProduct: Product[] = [];
  console.log(products);
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * (products.length - 1));
    randomProduct.push(products[random]);
    console.log(random);
  }
  console.log(randomProduct);
  return randomProduct;
};
