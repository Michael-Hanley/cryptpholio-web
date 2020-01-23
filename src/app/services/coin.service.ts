import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  api_url = environment.api_url;

  constructor(private http: HttpClient) {}

  getCoins() {
    // const url = this.api_url + '/market';
    const url = 'https://api.coinstats.app/public/v1/coins?limit=3500';
    return this.http.get(url);
  }
  getCoinDetail(coinId): any {
    // coinId is the name of the coin with spaces replaced with hyphens
    const url = `https://api.coinstats.app/public/v1/coins/${coinId}`;
    return this.http.get(url);
  }
  getGlobalStats() {
    // const url = this.api_url + '/market/global';
    const url = 'https://api.coinlore.com/api/global/';
    return this.http.get(url);
  }
  getHistory(coin, timeline) {
    const url = this.constructHistoryUrl(coin, timeline);
    return this.http.get(url);
  }

  constructHistoryUrl(coin, timeline) {
    switch (timeline) {
      case '7d':
        return `https://min-api.cryptocompare.com/data/histohour?fsym=${coin}&tsym=USD&limit=168&aggregate=1&e=CCCAGG`;
      case '24h':
        return `https://min-api.cryptocompare.com/data/histominute?fsym=${coin}&tsym=USD&limit=1440&aggregate=1&e=CCCAGG`;
      case '1h':
        return `https://min-api.cryptocompare.com/data/histominute?fsym=${coin}&tsym=USD&limit=60&aggregate=1&e=CCCAGG`;
      case '1m':
        return `https://min-api.cryptocompare.com/data/histohour?fsym=${coin}&tsym=USD&limit=720&aggregate=1&e=CCCAGG`;
      case '6m':
        return `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=183&aggregate=1&e=CCCAGG`;
      case '1y':
        return `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=365&aggregate=1&e=CCCAGG`;
      case '3y':
        return `https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=1095&aggregate=1&e=CCCAGG`;
    }
  }
}
