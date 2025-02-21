import { Item } from "./item";

export class BackstagePass extends Item {
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
    if (this.isOverdue()) {
      this.voidQuality();
    } else {
      this.addToQuality(1);
      this.processQualityRaiseBasedOnConcertComingSoon();
    }
  }

  private daysFromWhenARaiseShouldBeApplied = [
    { day: 10, raise: 1 },
    { day: 5, raise: 1 },
  ];

  private processQualityRaiseBasedOnConcertComingSoon() {
    this.daysFromWhenARaiseShouldBeApplied
      .filter(({ day }) => this.sellIn <= day)
      .forEach(({ raise }) => this.addToQuality(raise));
  }
}
