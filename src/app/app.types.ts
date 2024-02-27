export interface Money {
  value: number;
  currency: Currency;
}

export interface Currency {
  symbol: string;
  unit: string;
  shortName: string;
}
