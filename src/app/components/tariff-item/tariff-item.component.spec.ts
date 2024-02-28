import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffItemComponent } from './tariff-item.component';
import { TariffFeatureType } from '../../services/tariff-service.types';

describe('TariffItemComponent', () => {
  let component: TariffItemComponent;
  let fixture: ComponentFixture<TariffItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TariffItemComponent);
    component = fixture.componentInstance;
  });

  it('should render tariff item correctly', () => {
    component.tariff = {
      id: 'mockId',
      title: 'Mock tariff',
      price: {
        value: 111.22,
        currency: {
          symbol: '€',
          unit: 'EUR',
          shortName: 'EURO',
        },
      },
      features: [
        {
          type: TariffFeatureType.ConnectionType,
          name: 'DSL',
          value: 'DSL',
        },
        {
          type: TariffFeatureType.DownloadSpeed,
          name: 'Download speed',
          value: 50,
          options: [
            {
              key: 'unit',
              value: 'Mbit/s',
            },
          ],
        },
        {
          type: TariffFeatureType.UploadSpeed,
          name: 'Upload speed',
          value: 10,
          options: [
            {
              key: 'unit',
              value: 'Mbit/s',
            },
          ],
        },
      ],
      benefits: [
        {
          text: 'Most popular',
        },
      ],
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
