import { BackstagePass } from "../../app/types/backstage-pass";
import { Cheese } from "../../app/types/cheese";
import { ConjuredItem } from "../../app/types/conjured-item";
import { Elixir } from "../../app/types/elixir";
import { Equipment } from "../../app/types/equipment";
import { Sulfura } from "../../app/types/sulfura";
import { GildedRose } from "../../app/gilded-rose";

export const createGildedRose = (days: number, useLegacy: boolean) => {
  const items = [
    new Equipment({ name: "+5 Dexterity Vest", sellIn: 10, quality: 20 }), //
    new Cheese({ name: "Aged Brie", sellIn: 2, quality: 0 }), //
    new Elixir({ name: "Elixir of the Mongoose", sellIn: 5, quality: 7 }), //
    new Sulfura({
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: 0,
    }), //
    new Sulfura({
      name: "Sulfuras, Hand of Ragnaros",
      sellIn: -1,
    }),
    new BackstagePass({
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 15,
      quality: 20,
    }),
    new BackstagePass({
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 10,
      quality: 49,
    }),
    new BackstagePass({
      name: "Backstage passes to a TAFKAL80ETC concert",
      sellIn: 5,
      quality: 49,
    }),
    // this conjured item does not work properly yet
    new ConjuredItem({ name: "Conjured Mana Cake", sellIn: 3, quality: 6 }),
  ];

  const gildedRose = new GildedRose(items, useLegacy);

  let result = "";

  for (let i = 0; i < days; i++) {
    result += "-------- day " + i + " --------\n";
    result += "name, sellIn, quality\n";

    items.forEach((element) => {
      result +=
        element.name + " " + element.sellIn + " " + element.quality + "\n";
    });

    result += "\n";

    gildedRose.updateQuality();
  }

  return result;
};
