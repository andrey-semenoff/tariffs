import { Injectable } from '@angular/core';
import {
  ITariffService,
  Tariff,
  TariffFeatureType,
  TariffFilterOptions,
  TariffFilterType,
  TariffSortingOptions,
  TariffSortingType,
} from './tariff-service.types';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TariffService implements ITariffService {
  constructor(private http: HttpClient) {}

  getTariffs(
    filterOptions: TariffFilterOptions,
    sortingOptions: TariffSortingOptions
  ): Observable<Tariff[]> {
    return this.http
      .get<Tariff[]>(`${environment.BASE_URL}/assets/mock_data/tariffs.json`)
      .pipe(
        // In real live filtering and sorting should be done on BE
        map((tariffs: Tariff[]) => this.filter(tariffs, filterOptions)),
        map((tariffs: Tariff[]) => this.sort(tariffs, sortingOptions))
      );
  }

  private filter(tariffs: Tariff[], filters: TariffFilterOptions): Tariff[] {
    const filterKeys = Object.keys(filters) as TariffFilterType[];
    return filterKeys.length
      ? tariffs.filter(tariff => {
          return !!filterKeys.find(key => {
            let tariffValue = this.mapFilterTypeOnTariffValue(tariff, key);
            if (typeof tariffValue === 'string') {
              tariffValue = tariffValue.toLowerCase();
            }
            return tariffValue === filters[key]?.toLowerCase();
          });
        })
      : tariffs;
  }

  private sort(
    tariffs: Tariff[],
    sortingOptions: TariffSortingOptions
  ): Tariff[] {
    const type = sortingOptions.type;
    const dir = sortingOptions.direction;
    return [...tariffs].sort((tariffA, tariffB) => {
      let a = this.mapSortingTypeOnTariffValue(tariffA, type);
      let b = this.mapSortingTypeOnTariffValue(tariffB, type);
      return dir === 'desc' ? this.sortDesc(a, b) : this.sortAsc(a, b);
    });
  }

  private sortDesc(
    a: number | string | null,
    b: number | string | null
  ): 1 | -1 | 0 {
    if (a === null || b === null) {
      return 0;
    }
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    }
    return 0;
  }

  private sortAsc(
    a: number | string | null,
    b: number | string | null
  ): 1 | -1 | 0 {
    if (a === null || b === null) {
      return 0;
    }
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  }

  private mapSortingTypeOnTariffValue(
    tariff: Tariff,
    type: TariffSortingType
  ): string | number | null {
    if (type === 'rating') {
      return tariff.rating;
    } else if (type === 'price') {
      return tariff.price.value;
    } else if (type === 'downloadSpeed') {
      return tariff.features.find(
        feature => feature.type === TariffFeatureType.DownloadSpeed
      )?.value as number;
    }
    return null;
  }

  private mapFilterTypeOnTariffValue(
    tariff: Tariff,
    type: TariffFilterType
  ): string | number | null {
    if (type === 'connectionType') {
      return tariff.features.find(
        feature => feature.type === TariffFeatureType.ConnectionType
      )?.value as string;
    }
    return null;
  }
}
