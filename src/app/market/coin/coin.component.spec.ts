import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent, MockedComponent, MockRender } from 'ng-mocks';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MatIconModule } from '@angular/material/icon';
import { MainChartComponent } from './main-chart/main-chart.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CoinComponent } from './coin.component';

describe('CoinComponent', () => {
  let fixture: ComponentFixture<CoinComponent>;
  let component: CoinComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinComponent,
      MockComponent(MainChartComponent)],
      imports: [
        MatIconModule,
        MatProgressSpinnerModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
