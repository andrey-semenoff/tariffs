import { Observable } from 'rxjs';
import { Money } from '../app.types';

export interface ITariffService {
  getTariffs: () => Observable<Tariff[]>;
}

export interface Tariff {
  id: string;
  title: string;
  price: Money;
  features: TariffFeature[];
  benefits: TariffBenefit[];
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
