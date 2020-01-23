import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getCoinNews(coin): Observable<any> {
    const url = `https://min-api.cryptocompare.com/data/v2/news/?categories=${coin}`;
    return this.http.get(url);
  }
}
