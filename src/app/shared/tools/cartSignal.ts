import { signal, WritableSignal } from '@angular/core';

const cart = <T>(): WritableSignal<T[]> => signal<T[]>([]);

export const setCart = <T>(cartItems: T[]): void => {
  cart<T>().set(cartItems);
};

export const clearCartItems = <T>(): void => {
  cart<T>().set([]);
};

export const updateCartItems = <T>(cartItem: T): void => {
  cart<T>().update((items) => [...items, cartItem]);
};

export const deleteCartItem = <T extends { productId: number }>(
  id: number
): void => {
  cart<T>().update((items) => items.filter((item) => item.productId !== id));
};

export const getCartItems = <T>(): T[] => {
  return cart<T>()();
};
