import { createGildedRose } from "./golden-master-text-test";

let days: number = 2;

if (process.argv.length > 2) {
  days = +process.argv[2];
}

const result = createGildedRose(days, false);

console.log(result);
