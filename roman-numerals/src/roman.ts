// Roman Numerals Kata

import { RomanInfo } from "./roman-info";

export class ArabicToRomanNumber {
  #remainingArabicNumber: number;
  #romanNumberResult: string;

  constructor(
    private romanNumbersInformations: RomanInfo[],
    initialArabicNumber: number
  ) {
    this.#remainingArabicNumber = initialArabicNumber;
    this.#romanNumberResult = "";
  }

  execute(): string {
    this.romanNumbersInformations.forEach((romanInfo) =>
      this.processRomanInfo(romanInfo)
    );
    return this.#romanNumberResult || "Not able to calculate";
  }

  processRomanInfo(roman: RomanInfo): void {
    const currentRemainder = this.#remainingArabicNumber;
    const remainder = currentRemainder % roman.value;
    if (remainder === currentRemainder) return;

    const valueIncludedInCurrentRomanNumber = currentRemainder - remainder;
    const timesOfValue = valueIncludedInCurrentRomanNumber / roman.value;
    if (timesOfValue <= roman.maxStack) {
      this.#romanNumberResult += roman.number.repeat(timesOfValue);
      this.#remainingArabicNumber = remainder;
    }
  }
}
