import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Tariff, TariffFeatureType } from '../../services/tariff-service.types';

@Component({
  selector: 'app-tariff-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './tariff-item.component.html',
  styleUrl: './tariff-item.component.sass',
})
export class TariffItemComponent {
  @Input() idx!: number;
  @Input({ required: true }) tariff!: Tariff;
  readonly TariffFeatureType = TariffFeatureType;
}
