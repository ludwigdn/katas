import { Item } from "./item";

const SULFURAS_MAX_QUALITY = 80;

export class Sulfura extends Item {
  protected override maxQuality = SULFURAS_MAX_QUALITY;

  constructor({ name, sellIn }: { name: string; sellIn: number }) {
    super({ name, sellIn, quality: SULFURAS_MAX_QUALITY });
  }

  override updateQuality() {}

  override updateSellIn() {}
}
