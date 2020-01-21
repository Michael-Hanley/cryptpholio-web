import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoinMarketComponent } from './coin-market.component';
import { MarketTableComponent } from '../../market/coin-market/market-table/market-table.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material';

describe('CoinMarketComponent', () => {
  let component: CoinMarketComponent;
  let fixture: ComponentFixture<CoinMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoinMarketComponent,
        MockComponent(MarketTableComponent)
      ],
      imports: [
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
