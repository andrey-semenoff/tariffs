import { Pipe, PipeTransform } from '@angular/core';
import { Money } from '../app.types';

@Pipe({
  name: 'formatMoney',
  standalone: true,
})
export class FormatMoneyPipe implements PipeTransform {
  transform(money: Money): string {
    return `${money.value} ${money.currency.symbol}`;
  }
}
