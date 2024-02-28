import { Observable } from 'rxjs';
import { Money } from '../app.types';

export interface ITariffService {
  getTariffs: (
    filters: TariffFilterOptions,
    sorting: TariffSortingOptions
  ) => Observable<Tariff[]>;
}

export interface Tariff {
  id: string;
  title: string;
  price: Money;
  features: TariffFeature[];
  benefits: TariffBenefit[];
  rating: number;
}

export interface TariffFeature {
  type: TariffFeatureType;
  name: string;
  value: unknown;
  options?: TariffFeatureOption[];
}

export interface TariffBenefit {
  text: string;
}

export enum TariffFeatureType {
  ConnectionType = 'ConnectionType',
  DownloadSpeed = 'DownloadSpeed',
  UploadSpeed = 'UploadSpeed',
}

export interface TariffFeatureOption {
  key: string;
  value: unknown;
}

export type TariffFilterType = 'connectionType';

export type TariffSortingType = 'rating' | 'price' | 'downloadSpeed';

export type TariffSortingDirection = 'asc' | 'desc';

export type TariffFilterOptions = Partial<
  Record<TariffFilterType, string | null>
>;

export interface TariffSortingOptions {
  type: TariffSortingType;
  direction: TariffSortingDirection;
}
