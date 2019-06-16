import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CoinService {
  api_url = environment.api_url;

  constructor(private http: HttpClient) {}

  getCoinsByMarketCap() {
    const url = `https://api.coinmarketcap.com/v1/ticker/?limit=100`;
    return this.http.get(url);
  }
  getCoins() {
    const url = this.api_url + '/market';
    return this.http.get(url);
  }
  getGlobalMarketCap() {
    const url = this.api_url + '/market/global';
    return this.http.get(url);
  }
  getHistory(coin, timeline) {
    let url;
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
    } else if (timeline === '3y') {
      url = `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=1095&aggregate=1&e=CCCAGG`;
    }
    return this.http.get(url);
  }
}
