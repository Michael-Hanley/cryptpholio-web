import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { CoinNewsComponent } from './coin-news/coin-news.component';
import { CoinComponent } from './coin.component';
import { MainChartComponent } from './main-chart/main-chart.component';

let testProps = {
  coinNews: [{
    title: 'test-title',
    imageurl: 'test-image-url',
    url: 'test-url'
  }, {
    title: 'test-title-1',
    imageurl: 'test-image-url-1',
    url: 'test-url-1'
  }]
}

describe('CoinComponent', () => {
  let fixture: ComponentFixture<CoinComponent>;
  let component: CoinComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoinComponent,
        MockComponent(CoinNewsComponent),
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
    component.coinNews = testProps.coinNews;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
