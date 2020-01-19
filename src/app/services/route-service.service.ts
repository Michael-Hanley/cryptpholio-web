import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private readonly _marketParams = new BehaviorSubject({});

  readonly marketParams$ = this._marketParams.asObservable();

  constructor() { }

  get marketParams() {
    return this._marketParams.getValue();
  }

  updateMarketParams(location) {
    this._marketParams.next(location);
  }
}
