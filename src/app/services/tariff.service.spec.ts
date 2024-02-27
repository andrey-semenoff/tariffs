import { TestBed } from '@angular/core/testing';
import { TariffService } from './tariff.service';
import { HttpClientTestingModule, provideHttpClientTesting } 
    from '@angular/common/http/testing';

describe('TariffService', () => {
  let service: TariffService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideHttpClientTesting()]
    });
    service = TestBed.inject(TariffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
