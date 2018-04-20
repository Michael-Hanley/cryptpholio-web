import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CoinService } from '../../services/coin-service.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-coin-market',
  templateUrl: './coin-market.component.html',
  styleUrls: ['./coin-market.component.css']
})
export class CoinMarketComponent implements OnInit {
  coins;
  timer;
  columnsToDisplay = ['icon', 'name', 'symbol', 'usd_price', 'btc_price', 'market_cap_usd', 'available_supply'];
  imageUrl = 'https://www.cryptocompare.com';
  dataSource = new MatTableDataSource<Element>(this.coins);
  pageIndex;
  pageSize = 10;
  page;
  constructor(private coinService: CoinService, private router: Router,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private route: ActivatedRoute) {
    this.getCoins();
    iconRegistry.addSvgIcon(
      'btc',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/btc.svg'));

      this.route.queryParams.subscribe(
        params => {
          if (!params.pageSize){
            this.pageSize = 10;
          } else {
          this.pageIndex = params.pageIndex;
          this.pageSize = params.pageSize;
          }
      });
   }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  coinView(coin) {
    clearTimeout(this.timer);
    this.router.navigate(['/coin'], {queryParams: coin});
  }
  getCoins() {
    this.coinService.getCoins()
    .subscribe(coins => {
      console.log(coins);
      this.coins = coins;
      this.dataSource = new MatTableDataSource<Element>(this.coins);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.syncCoins();
    });
  }
  syncCoins() {
    this.timer = setTimeout(() => this.getCoins(), 60000);
  }
  updateUrl(params) {
    const queryParams = params;
    this.router.navigate(['.'], { queryParams: queryParams });
  }
  ngOnInit() {
    if (this.page !== undefined) {
      this.pageSize = this.pageIndex.pageSize;
      this.pageIndex = this.pageIndex.pageIndex;
    }
  }
}
export interface Element {
  name: string;
  symbol: number;
  btc_price: number;
  usd_price: string;
  market_cap_usd: number;
  image_url: string;
  available_supply: number;
  total_supply: number;
  max_supply: number;
}
