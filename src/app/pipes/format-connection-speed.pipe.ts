import { Pipe, PipeTransform } from '@angular/core';
import { TariffFeature } from '../services/tariff-service.types';

@Pipe({
  name: 'formatConnectionSpeed',
  standalone: true,
})
export class FormatConnectionSpeedPipe implements PipeTransform {
  transform(feature: TariffFeature): string {
    const unit: string = feature.options?.find(o => o.key === 'unit')
      ?.value as string;
    return `${feature.value}${unit ? ' ' + unit : ''}`;
  }
}
