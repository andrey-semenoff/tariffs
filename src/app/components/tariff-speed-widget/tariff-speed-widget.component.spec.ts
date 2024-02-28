import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffSpeedWidgetComponent } from './tariff-speed-widget.component';
import { TariffFeatureType } from '../../services/tariff-service.types';

describe('TariffSpeedWidgetComponent', () => {
  let component: TariffSpeedWidgetComponent;
  let fixture: ComponentFixture<TariffSpeedWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffSpeedWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TariffSpeedWidgetComponent);
    component = fixture.componentInstance;
    component.type = 'download';
    component.speedFeature = {
      name: 'Feature name',
      type: TariffFeatureType.DownloadSpeed,
      value: 100,
      options: [
        {
          key: 'unit',
          value: 'Mbit/s',
        },
      ],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
