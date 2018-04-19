import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoinService {

  constructor(private http: HttpClient) {
    // this.getFullCoinList();
  }

  getCoinsByMarketCap() {
    const url = `https://api.coinmarketcap.com/v1/ticker/?limit=100`;
    return this.http.get(url);
  }
  getCoins() {
    const url = 'http://localhost:3000/market';
    return this.http.get(url);
  }
  getHistory(coin) {
    if (coin === 'MIOTA') {
      coin = 'IOT';
    }
    const url = `https://min-api.cryptocompare.com/data/histohour?fsym=${coin}&tsym=USD&limit=60&aggregate=3&e=CCCAGG`;
    return this.http.get(url);
  }
}
