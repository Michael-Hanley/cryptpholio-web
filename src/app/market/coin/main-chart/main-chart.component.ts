import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CoinService } from '../../../services/coin-service.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.css']
})
export class MainChartComponent implements OnInit, OnDestroy {
  @Input() symbol;
  @Input() supply;
  history;
  chartHistory;
  chart;
  ready = false;
  constructor(private coinService: CoinService) {
  }
  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {
    this.coinService.getHistory(this.symbol)
      .subscribe(hist => {
        this.history = hist;
        const market_cap_usd_arr = [];
        const date_arr = [];
        this. chartHistory = [];
        this.history.Data.forEach(time => {
          const market_cap_usd = time.high * this.supply;
          const utcSeconds = time.time;
          const date = new Date(0);
          date.setUTCSeconds(utcSeconds);
          // const market_cap_usd = {'y': date, 'x': time['market_cap_usd']};
          // market_cap_usd_arr.push(market_cap_usd);
          market_cap_usd_arr.push({'y': market_cap_usd, 'x': date});
          // date_arr.push(date);
        });
        // this.chartHistory['market_cap_usd'] = market_cap_usd_arr;
        this.chartHistory = market_cap_usd_arr;
        // this.chartHistory['dates'] = date_arr;
        this.chart = new Chart({
          chart: {
            type: 'line'
          },
          title: {
            text: 'Linechart'
          },
          xAxis: {
            type: 'datetime',
            title: {
              text: 'Date'
            },
            labels: {
              format: '{value:%e-%b-%Y %H:%M:%S}'
            }
          },
          credits: {
            enabled: false
          },
          series: [{
            name: this.symbol,
            data: this.chartHistory
          }]
        });
        this.ready = true;
      });
    }
    ngOnDestroy() {
      this.chart = null;
    }
}

