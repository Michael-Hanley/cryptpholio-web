import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoinService } from '../../services/coin.service';
import { NewsService } from '../../services/news.service';
import { RouteService } from '../../services/route.service';
import { Coin } from '../coin-market/coin-market.component';

type CoinDetailsReply = {
  coin: Coin
}

type SourceInfo = {
  name: String
  lang: String
  img: String
}

type CoinNews = {
  body: String
  categories: String
  downvotes: String
  guid: String
  id: String
  imageurl: String
  lang: String
  published_on: Number
  source: String
  source_info: SourceInfo
  tags: String
  title: String
  upvotes: String
  url: String
}

type CoinNewsReply = {
  Data: CoinNews[]
}

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit, OnDestroy {
  coin;
  current_btc_price;
  market_cap_btc;
  coinNews;
  imageUrl = 'https://www.cryptocompare.com';

  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute, iconRegistry: MatIconRegistry,
    public routeService: RouteService, sanitizer: DomSanitizer, public location: Location,
    private coinService: CoinService, private router: Router, private newsService: NewsService) {
    this.route.queryParams
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(params => {
        this.getCoinDetails(params.coinId);
      });
    iconRegistry.addSvgIcon(
      'btc',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/btc.svg')
    );
  }

  getCoinDetails(coinId) {
    this.coinService.getCoinDetail(coinId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((coin: CoinDetailsReply) => {
        if (!coin) { return; }
        this.coin = coin.coin;
        this.current_btc_price = this.coin.price / this.coin.priceBtc;
        this.market_cap_btc = this.coin.marketCap / this.current_btc_price;
        this.getCoinNews(this.coin.symbol);
      });
  }

  getCoinNews(coin) {
    this.newsService.getCoinNews(coin)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: CoinNewsReply) => {
        this.coinNews = res.Data;
      });
  }

  backToMarker() {
    this.router.navigate(['/market'], { queryParams: this.routeService.marketParams });
  }

  ngOnInit() { }
  ngOnDestroy(): any {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
