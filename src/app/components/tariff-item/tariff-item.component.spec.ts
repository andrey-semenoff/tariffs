import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffItemComponent } from './tariff-item.component';

describe('TariffItemComponent', () => {
  let component: TariffItemComponent;
  let fixture: ComponentFixture<TariffItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TariffItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
