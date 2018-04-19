import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CoinService } from '../../services/coin-service.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-coin-market',
  templateUrl: './coin-market.component.html',
  styleUrls: ['./coin-market.component.css']
})
export class CoinMarketComponent implements OnInit {
  coins;
  columnsToDisplay = ['icon', 'name', 'symbol', 'usd_price', 'btc_price', 'market_cap_usd', 'available_supply'];
  imageUrl = 'https://www.cryptocompare.com';
  dataSource = new MatTableDataSource<Element>(this.coins);
  constructor(private coinService: CoinService, private router: Router,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'btc',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/btc.svg'));
   }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  coinView(coin) {
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
    });
  }
  ngOnInit() {
    this.getCoins();
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
