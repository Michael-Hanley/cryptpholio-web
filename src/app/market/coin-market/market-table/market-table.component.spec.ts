import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MarketTableComponent } from './market-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


describe('MarketTableComponent', () => {
  let component: MarketTableComponent;
  let fixture: ComponentFixture<MarketTableComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketTableComponent ],
      imports: [
        MatTableModule,
        MatIconModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const coin = {
      id: 'test-coin'
    };
    component.coinView(coin);

    expect(navigateSpy).toHaveBeenCalledWith(['/coin'], { queryParams: { coinId: 'test-coin' } });
  });
  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
