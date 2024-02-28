export interface TariffListSortingOption {
  type: TariffListSortingOptionType;
  label: string;
}

export type TariffListSortingOptionType =
  | 'rating'
  | 'price_down'
  | 'price_up'
  | 'speed_down'
  | 'speed_up';
