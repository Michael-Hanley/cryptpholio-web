import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market-table',
  templateUrl: './market-table.component.html',
  styleUrls: ['./market-table.component.scss']
})
export class MarketTableComponent implements OnInit {
  @Input() dataSource;
  @Input() coins;
  @Input() columnsToDisplay;
  @Output() navigated = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  coinView(coin) {
    this.navigated.emit(true);
    this.router.navigate(['/coin'], {queryParams: {coinId: coin.id}});
  }

  ngOnInit() {
  }

}
