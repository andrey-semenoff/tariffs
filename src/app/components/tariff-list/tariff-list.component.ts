import { Component, OnInit } from '@angular/core';
import { TariffItemComponent } from '../tariff-item/tariff-item.component';
import { CommonModule } from '@angular/common';
import {
  Tariff,
  TariffFilterOptions,
  TariffSortingOptions,
} from '../../services/tariff-service.types';
import { TariffService } from '../../services/tariff.service';
import { finalize } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TariffListSortingOption } from './tariff-list.types';

@Component({
  selector: 'app-tariff-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TariffItemComponent],
  providers: [TariffService],
  templateUrl: './tariff-list.component.html',
  styleUrl: './tariff-list.component.sass',
})
export class TariffListComponent implements OnInit {
  tariffs!: Tariff[];
  sorting = 'rating';
  filterSotringFormGroup = new FormGroup({
    sorting: new FormControl('rating'),
    filters: new FormGroup({
      connectionType: new FormControl(null),
    }),
  });
  tariffListSortingOptions: TariffListSortingOption[] = [
    {
      label: 'Popular',
      type: 'rating',
    },
    {
      label: 'Price (hign to low)',
      type: 'price_down',
    },
    {
      label: 'Price (low to hign)',
      type: 'price_up',
    },
    {
      label: 'Download speed (high to low)',
      type: 'speed_down',
    },
    {
      label: 'Download speed (low to hign)',
      type: 'speed_up',
    },
  ];

  constructor(private tariffService: TariffService) {}

  ngOnInit(): void {
    this.loadTariffs();
    this.filterSotringFormGroup.valueChanges.subscribe(() => {
      this.loadTariffs();
    });
  }

  loadTariffs() {
    const filters = this.getFilterOptions();
    const sorting = this.getSortingOptions();

    this.tariffService
      .getTariffs(filters, sorting)
      .pipe(finalize(() => {}))
      .subscribe({
        next: (tariffs: Tariff[]) => {
          // console.log(tariffs);
          this.tariffs = tariffs;
        },
        error: () => {
          this.tariffs = [];
        },
      });
  }

  getSortingOptions(): TariffSortingOptions {
    switch (this.filterSotringFormGroup.value.sorting) {
      case 'price_down':
        return {
          type: 'price',
          direction: 'desc',
        };
      case 'price_up':
        return {
          type: 'price',
          direction: 'asc',
        };
      case 'speed_down':
        return {
          type: 'downloadSpeed',
          direction: 'desc',
        };
      case 'speed_up':
        return {
          type: 'downloadSpeed',
          direction: 'asc',
        };
    }
    return {
      type: 'rating',
      direction: 'desc',
    };
  }

  getFilterOptions(): TariffFilterOptions {
    const { connectionType } = this.filterSotringFormGroup.value.filters ?? {};
    return {
      ...(connectionType ? { connectionType } : {}),
    };
  }
}
