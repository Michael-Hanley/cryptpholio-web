import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Chart } from 'angular-highcharts';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoinService } from '../../../services/coin.service';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss']
})
export class MainChartComponent implements OnInit, OnDestroy {
  @Input() symbol;
  @Input() supply;
  @Input() name;

  history;
  chartHistory;
  chart;
  ready = false;
  timelineOptions = ['1h', '24h', '7d', '1m', '6m', '1y', '3y'];
  currentTimeline = '3y';
  theme;

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(private coinService: CoinService, private themeService: ThemeService) {}

  createGraph() {
    this.chart = new Chart({
      chart: {
        type: 'line',
        backgroundColor: this.theme.darkColor
      },
      title: {
        text: this.name,
        style: {
          color: this.theme.lightColor
        }
      },
      legend: {
        itemStyle: {
          color: this.theme.lightColor
        }
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Date',
          style: {
            color: this.theme.lightColor
          }
        },
        labels: {
          style: {
            //
            color: this.theme.lightColor
          },
          format: '{value:%e-%b-%Y}'
        }
      },
      yAxis: {
        title: {
          text: 'Market Cap',
          style: {
            color: this.theme.lightColor
          }
        },
        labels: {
          style: {
            color: this.theme.lightColor
          }
        }
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          turboThreshold: 5000
        }
      },
      series: [{
        type: 'line',
        name: this.symbol,
        data: this.chartHistory,
        dataLabels: {
          style: {
            color: this.theme.lightColor
          }
        }
      }],
    });
  }

  getCoinHistory() {
    this.coinService.getHistory(this.symbol, this.currentTimeline)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(hist => {
      this.chartHistory = this.createGraphData(hist);
      this.createGraph();
      this.ready = true;
    });
  }

  createGraphData(history) {
    const market_cap_usd_arr = [];

    history.Data.forEach(time => {
      const date = new Date(0);

      market_cap_usd_arr.push({
        y: this.coinService.calculateMarketCap(time.high, this.supply),
        x: date.setUTCSeconds(time.time)
      });
    });

    return market_cap_usd_arr;
  }

  ngOnInit() {
    this.getCoinHistory();
    this.themeService._themeObject$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(theme => {
        this.theme = theme;
        this.createGraph();
      });
  }

  ngOnDestroy() {
      this.chart = null;
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
  }
}

