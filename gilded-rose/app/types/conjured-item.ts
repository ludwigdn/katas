import { Item } from "./item";

export class ConjuredItem extends Item {
  constructor({
    name,
    sellIn,
    quality,
  }: {
    name: string;
    sellIn: number;
    quality: number;
  }) {
    super({ name, sellIn, quality });
  }
}
