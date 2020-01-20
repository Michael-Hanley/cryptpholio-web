import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly _themeObject = new BehaviorSubject({});

  readonly _themeObject$ = this._themeObject.asObservable();

  constructor() {
    this.updateThemeObject('light-theme');
   }

  get themeObject() {
    return this._themeObject.getValue();
  }

  updateThemeObject(theme) {
    const themeObj: any = {};
    if (theme === 'dark-theme') {
      themeObj.lightColor = '#C0C0C0';
      themeObj.darkColor = '#424242';
    } else {
      themeObj.lightColor = '';
      themeObj.darkColor = '';
    }
    this._themeObject.next(themeObj);
  }
}
