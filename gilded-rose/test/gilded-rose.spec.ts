import { createGildedRose } from "./golden/golden-master-text-test";

describe("Gilded Rose", () => {
  it("Refacto should match legacy and snapshot", () => {
    const result = createGildedRose(30, true);
    const result2 = createGildedRose(30, false);
    expect(result).toMatch(result2);
    expect(result2).toMatchSnapshot();
  });
});
