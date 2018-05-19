export interface IProduct {
  id: number;
  name: string;
  code: string;
  release_date: string;
  price: number;
  desc: string;
  rating: number;
  image: string;
}

export class Product implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public release_date: string,
    public price: number,
    public desc: string,
    public rating: number,
    public image: string,
  ) {}

  calculateDiscount(percent: number): number {
    return this.price - (this.price * percent / 100);
}
}
