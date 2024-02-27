import { Component, OnInit } from '@angular/core';
import { TariffItemComponent } from '../tariff-item/tariff-item.component';
import { CommonModule } from '@angular/common';
import { Tariff } from '../../services/tariff-service.types';
import { TariffService } from '../../services/tariff.service';
import { finalize } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    filters: new FormGroup({}),
  });

  constructor(private tariffService: TariffService) {}

  ngOnInit(): void {
    this.loadTariffs();
    this.filterSotringFormGroup.valueChanges.subscribe(form => {
      console.log(form);
    });
  }

  loadTariffs() {
    this.tariffService
      .getTariffs()
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
}
