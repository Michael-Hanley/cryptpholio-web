import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coin-news',
  templateUrl: './coin-news.component.html',
  styleUrls: ['./coin-news.component.scss']
})
export class CoinNewsComponent implements OnInit {
  @Input() title;
  @Input() imageUrl;
  @Input() url;
  constructor() { }

  ngOnInit() {
  }

}
