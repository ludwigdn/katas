import { Item } from "./item";

export class Equipment extends Item {
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
