export function randomAdv<T>(products: T[]): T[] {
  const randomProducts: T[] = [];

  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * (products.length - 1));

    randomProducts.push(products[random]);
  }

  return randomProducts;
}
