import { Item } from "./item";

export class Cheese extends Item {
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

  override updateQuality() {
    this.addToQuality(1);
  }
}
