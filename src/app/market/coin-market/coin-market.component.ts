import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoinService } from '../../services/coin-service.service';
import { RouteService } from '../../services/route-service.service';

@Component({
  selector: 'app-coin-market',
  templateUrl: './coin-market.component.html',
  styleUrls: ['./coin-market.component.scss']
})
export class CoinMarketComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  coins;
  timer;
  columnsToDisplay = [
    'icon',
    'name',
    'symbol',
    'price',
    'priceBtc',
    'marketCap',
    'priceChange1d',
    'availableSupply',
    'volume'
  ];
  imageUrl = 'https://www.cryptocompare.com';
  dataSource = new MatTableDataSource<Coin>(this.coins);
  pageIndex;
  pageSize = 10;
  page;
  globalStats: any;
  ready = false;

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(private coinService: CoinService, private router: Router,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private route: ActivatedRoute, private routeService: RouteService) {
    this.getCoins();
    this.getGlobalStats();
    iconRegistry.addSvgIcon(
      'btc',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/btc.svg'));

      this.route.queryParams.subscribe(
        params => {
          if (!params.pageSize) {
            this.pageSize = 10;
          } else {
          this.pageIndex = params.pageIndex;
          this.pageSize = params.pageSize;
          }

          this.routeService.updateMarketParams(params);
      });
   }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getCoins() {
    this.coinService.getCoins()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(coins => {
        if (!coins) { return; }
        this.coins = coins;
        this.dataSource = new MatTableDataSource<Coin>(this.coins.coins);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.ready = true;
        this.syncCoins();
      });
  }
  getGlobalStats() {
    this.coinService.getGlobalStats()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        this.globalStats = res[0];
      });
  }

  syncCoins() {
    this.timer = setTimeout(() => this.getCoins(), 60000);
  }

  updateUrl(params) {
    const queryParams = params;
    this.router.navigate(['.'], { queryParams: queryParams });
    this.routeService.updateMarketParams(params);
  }

  onNavigation(navigated) {
    if (navigated) {
      clearTimeout(this.timer);
    }
  }

  ngOnInit() {
    if (this.page !== undefined) {
      this.pageSize = this.pageIndex.pageSize;
      this.pageIndex = this.pageIndex.pageIndex;
    }
  }

  ngOnDestroy(): any {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
export interface Coin {
  name: string;
  symbol: number;
  priceBtc: number;
  price: number;
  marketCap: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  icon: string;
  availableSupply: number;
  totalSupply: number;
}
