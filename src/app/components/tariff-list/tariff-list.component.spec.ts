import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TariffListComponent } from './tariff-list.component';
import { TariffService } from '../../services/tariff.service';
import { Tariff } from '../../services/tariff-service.types';
import { of, Observable } from 'rxjs';

class MockTariffService {
  getTariffs(): Observable<Tariff[]> {
    return of([]);
  }
}

describe('TariffListComponent', () => {
  let component: TariffListComponent;
  let fixture: ComponentFixture<TariffListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffListComponent, HttpClientTestingModule],
      providers: [
        provideHttpClientTesting(),
        { provide: TariffService, useClass: MockTariffService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TariffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
