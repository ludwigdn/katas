import { Item } from "./item";

export class Elixir extends Item {
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
