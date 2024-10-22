export interface AdvSlider {
  tittle: string;
  discount: number;
  price: number;
  discountPrice: number;
  image: string;
}

export const advSlider: AdvSlider[] = [
  {
    tittle: 'Комплект бездротової сигналізації Ajax StarterKit',
    discount: 50,
    price: 100000,
    discountPrice: 50000,
    image: 'assets/images/png/advSlImg.png',
  },
  {
    tittle: 'Комплект бездротової сигналізації Ajax StarterKit',
    discount: 30,
    price: 1000,
    discountPrice: 700,
    image: 'assets/images/png/advSlImg.png',
  },
  {
    tittle: 'Комплект бездротової сигналізації Ajax StarterKit',
    discount: 20,
    price: 10000,
    discountPrice: 8000,
    image: 'assets/images/png/advSlImg.png',
  },
];
