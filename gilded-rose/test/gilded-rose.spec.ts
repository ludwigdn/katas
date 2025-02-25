import { createGildedRose } from "./golden/golden-master-text-test";

describe("Gilded Rose", () => {
  it("should match all of legacy process, new process and snapshot results", () => {
    const result = createGildedRose(30, true);
    const result2 = createGildedRose(30, false);
    expect(result).toMatch(result2);
    expect(result2).toMatchSnapshot();
  });
});
