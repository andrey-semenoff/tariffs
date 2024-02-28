import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffSpeedWidgetComponent } from './tariff-speed-widget.component';

describe('TariffSpeedWidgetComponent', () => {
  let component: TariffSpeedWidgetComponent;
  let fixture: ComponentFixture<TariffSpeedWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffSpeedWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TariffSpeedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
