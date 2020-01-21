import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MainChartComponent } from './main-chart.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChartModule } from 'angular-highcharts';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('MainChartComponent', () => {
  let component: MainChartComponent;
  let fixture: ComponentFixture<MainChartComponent>;

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
});
