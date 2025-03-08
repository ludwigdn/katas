import { ArabicToRomanNumber } from "./roman";
import RomanNumbersInfo from "./roman-info";

describe("Roman numerals converter", () => {
  test.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [14, "XIV"],
    [40, "XL"],
    [44, "XLIV"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [129, "CXXIX"],
    [400, "CD"],
    [474, "CDLXXIV"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
    [1984, "MCMLXXXIV"],
    [3999, "MMMCMXCIX"],
    [4000, "Not able to calculate"],
  ])(
    "It should convert %i to '%s'",
    (arabicNumber: number, romanNumber: string) => {
      const processedRomanNumber = new ArabicToRomanNumber(
        RomanNumbersInfo,
        arabicNumber
      ).execute();
      expect(processedRomanNumber).toBe(romanNumber);
    }
  );
});
