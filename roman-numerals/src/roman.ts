// Roman Numerals Kata
//
// I = 1, V = 5, X = 10, XL = 40,
// L = 50, C = 100, D = 500 et M = 1000

type RomanInfo = {
  number: string;
  value: number;
  maxStack: number;
};

const Romans: RomanInfo[] = [
  {
    number: "M",
    value: 1000,
    maxStack: 3,
  },
  {
    number: "D",
    value: 500,
    maxStack: 1,
  },
  {
    number: "C",
    value: 100,
    maxStack: 3,
  },
  {
    number: "L",
    value: 50,
    maxStack: 1,
  },
  {
    number: "X",
    value: 10,
    maxStack: 3,
  },
  {
    number: "V",
    value: 5,
    maxStack: 1,
  },
  {
    number: "I",
    value: 1,
    maxStack: 3,
  },
];

export class ArabicToRomanNumber {
  #initialArabicNumber: number;
  #remainingArabicNumber: number;
  #romanNumberResult: string;

  constructor(initialArabicNumber: number) {
    this.#initialArabicNumber = initialArabicNumber;
    this.#remainingArabicNumber = initialArabicNumber;
    this.#romanNumberResult = "";
  }

  private setRemainingArabicNumber(number: number): void {
    this.#remainingArabicNumber = number;
  }

  private addRomanNumber(number: string): void {
    this.#romanNumberResult += number;
  }

  execute(): string {
    for (let romanInfo of Romans) {
      this.processRomanInfo(romanInfo);
    }
    return this.#romanNumberResult;
  }

  processRomanInfo(roman: RomanInfo): void {
    const currentRemainder = this.#remainingArabicNumber;
    const remainder = currentRemainder % roman.value;
    if (remainder === currentRemainder) return;

    const valueIncludedInCurrentRomanNumber = currentRemainder - remainder;
    const timesOfValue = valueIncludedInCurrentRomanNumber / roman.value;
    if (timesOfValue <= roman.maxStack) {
      this.addRomanNumber(roman.number.repeat(timesOfValue));
    }

    this.setRemainingArabicNumber(remainder);
  }
}
