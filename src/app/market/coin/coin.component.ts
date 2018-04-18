import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {
  coin;
  imageUrl = 'https://www.cryptocompare.com';
  constructor(private route: ActivatedRoute, iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    this.route.queryParams.subscribe(
    params => {
         console.log(params);
         this.coin = params;
    });
    iconRegistry.addSvgIcon(
      'btc',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/btc.svg'));
  }

  ngOnInit() {
  }

}
