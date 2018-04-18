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
  // getFullCoinList() {
  //   const url = `https://min-api.cryptocompare.com/data/all/coinlist`;
  //   this.http.get(url)
  //     .subscribe(coins => {
  //       console.log(coins.Data)
  //       const fullCoinList = coins.Data;
  //       const marketCapUrl = `https://api.coinmarketcap.com/v1/ticker/?limit=100`;
  //       this.http.get(marketCapUrl)
  //         .subscribe(coinsByMarketCap => {
  //           Object.keys(coinsByMarketCap).map(coinMarketCapObj => {
  //             if (coinsByMarketCap[coinMarketCapObj].symbol === 'MIOTA') {
  //               console.log(fullCoinList['IOT'].ImageUrl);
  //             } else if (coinsByMarketCap[coinMarketCapObj].symbol === 'NANO') {
  //               console.log(fullCoinList['XRB'].ImageUrl);
  //             } else if (coinsByMarketCap[coinMarketCapObj].symbol === 'CENNZ') {
  //               console.log(fullCoinList['XRB'].ImageUrl);
  //             } else if (fullCoinList[coinsByMarketCap[coinMarketCapObj].symbol].ImageUrl === undefined) {
  //               console.log('womp womp');
  //             } else {
  //                console.log(fullCoinList[coinsByMarketCap[coinMarketCapObj].symbol].ImageUrl);
  //             }
  //           });
  //         });
  //     });
  // }
}
