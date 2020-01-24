import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MainChartComponent } from './main-chart.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChartModule } from 'angular-highcharts';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('MainChartComponent', () => {
  let component: MainChartComponent;
  let fixture: ComponentFixture<MainChartComponent>;
  const history = {
    Data: [
      {high: 100.00, time: 1578960000},
      {high: 200.00, time: 1578970000}
    ]
  };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChartComponent ],
      imports: [
        MatButtonToggleModule,
        ChartModule,
        MatProgressSpinnerModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create graph data', () => {
    component.supply = 100000;
    expect(component.createGraphData(history)).toMatchObject([{'x': 1578960000000, 'y': 10000000}, {'x': 1578970000000, 'y': 20000000}]);
  });
  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
