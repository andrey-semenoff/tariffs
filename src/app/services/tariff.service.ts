import { Injectable } from '@angular/core';
import { ITariffService, Tariff } from './tariff-service.types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TariffService implements ITariffService {
  constructor(private http: HttpClient) {}

  getTariffs(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(
      `${environment.BASE_URL}/assets/mock_data/tariffs.json`
    );
    // .pipe(delay(2000));
  }
}
