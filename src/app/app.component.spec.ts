import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@Component({
  selector: 'app-header',
  standalone: true,
  template: '',
})
class MockHeaderComponent {}

@Component({
  selector: 'app-footer',
  standalone: true,
  template: '',
})
class MockFooterComponent {}

@Component({
  selector: 'app-tariff-list',
  standalone: true,
  template: '',
})
class MockTariffListComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClientTesting()],
    })
      .overrideComponent(AppComponent, {
        remove: {
          imports: [HeaderComponent, FooterComponent, TariffListComponent],
        },
        add: {
          imports: [
            MockHeaderComponent,
            MockFooterComponent,
            MockTariffListComponent,
          ],
        },
      })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the header, main and footer`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('main')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });
});
