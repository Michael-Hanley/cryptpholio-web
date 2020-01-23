import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly _themeObject = new BehaviorSubject({});
  private readonly _currentTheme = new BehaviorSubject('');

  readonly _themeObject$ = this._themeObject.asObservable();
  readonly _currentTheme$ = this._currentTheme.asObservable();

  constructor() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.updateThemeObject(theme);
    } else {
      this.updateThemeObject('light-theme');
    }
  }

  get themeObject(): Object {
    return this._themeObject.getValue();
  }
  get currentTheme() {
    return this._currentTheme.getValue();
  }

  updateThemeObject(theme) {
    const themeObj = this.chooseTheme(theme);
    localStorage.setItem('theme', theme);
    this._themeObject.next(themeObj);
    this._currentTheme.next(theme);
  }

  chooseTheme(theme) {
    const themeObj: any = {};
    if (theme === 'dark-theme') {
      themeObj.lightColor = '#C0C0C0';
      themeObj.darkColor = '#424242';
    } else {
      themeObj.lightColor = '';
      themeObj.darkColor = '';
    }
    return themeObj;
  }
}
