export abstract class Item {
  name: string;
  sellIn: number;
  quality: number;

  protected maxQuality = 50;
  protected minQuality = 0;

  constructor({
    name,
    sellIn,
    quality,
  }: {
    name: string;
    sellIn: number;
    quality: number;
  }) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  public goToNextDay() {
    this.updateQuality();
    this.updateSellIn();
    if (this.isOverdue()) {
      this.updateQuality();
    }
  }

  protected hasReachedMinQuality = () => this.quality <= this.minQuality;
  protected hasReachedMaxQuality = () => this.quality >= this.maxQuality;
  protected isOverdue = () => this.sellIn < 0;

  protected addToQuality(raise) {
    this.quality += raise;
    this.checkIfShouldSetQualityCeiling();
    this.checkIfShouldSetQualityFloor();
  }

  protected updateSellIn() {
    this.sellIn--;
  }

  protected updateQuality() {
    this.addToQuality(-1);
  }

  protected voidQuality() {
    this.quality = 0;
  }

  private checkIfShouldSetQualityCeiling() {
    if (this.hasReachedMaxQuality()) {
      this.quality = this.maxQuality;
    }
  }

  private checkIfShouldSetQualityFloor() {
    if (this.hasReachedMinQuality()) {
      this.quality = this.minQuality;
    }
  }
}
