export type RomanInfo = {
  number: string;
  value: number;
  maxStack: number;
};

const RomanNumbersInfo: RomanInfo[] = [
  {
    number: "M",
    value: 1000,
    maxStack: 3,
  },
  {
    number: "CM",
    value: 900,
    maxStack: 1,
  },
  {
    number: "D",
    value: 500,
    maxStack: 1,
  },
  {
    number: "CD",
    value: 400,
    maxStack: 1,
  },
  {
    number: "C",
    value: 100,
    maxStack: 3,
  },
  {
    number: "XC",
    value: 90,
    maxStack: 1,
  },
  {
    number: "L",
    value: 50,
    maxStack: 1,
  },
  {
    number: "XL",
    value: 40,
    maxStack: 1,
  },
  {
    number: "X",
    value: 10,
    maxStack: 3,
  },
  {
    number: "IX",
    value: 9,
    maxStack: 1,
  },
  {
    number: "V",
    value: 5,
    maxStack: 1,
  },
  {
    number: "IV",
    value: 4,
    maxStack: 1,
  },
  {
    number: "I",
    value: 1,
    maxStack: 3,
  },
];

export default RomanNumbersInfo;
