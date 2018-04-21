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
  getHistory(coin, timeline) {
    let url;
    if (coin === 'MIOTA') {
      coin = 'IOT';
    }
    if (timeline === '7d') {
      url = `https://min-api.cryptocompare.com/data/histohour?fsym=${coin}&tsym=USD&limit=168&aggregate=1&e=CCCAGG`;
    } else if (timeline === '24h') {
      url = `https://min-api.cryptocompare.com/data/histominute?fsym=${coin}&tsym=USD&limit=1440&aggregate=1&e=CCCAGG`;
    } else if (timeline === '1h') {
      url = `https://min-api.cryptocompare.com/data/histominute?fsym=${coin}&tsym=USD&limit=60&aggregate=1&e=CCCAGG`;
    } else if (timeline === '1m') {
      url = `https://min-api.cryptocompare.com/data/histohour?fsym=${coin}&tsym=USD&limit=720&aggregate=1&e=CCCAGG`;
    } else if (timeline === '6m') {
      url = `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=183&aggregate=1&e=CCCAGG`;
    } else if (timeline === '1y') {
      url = `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=365&aggregate=1&e=CCCAGG`;
    }
    return this.http.get(url);
  }
}
