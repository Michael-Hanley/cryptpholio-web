import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly _themeObject = new BehaviorSubject({});
  private readonly _currentTheme = new BehaviorSubject('');

  readonly _themeObject$ = this._themeObject.asObservable();
  readonly _currentTheme$ = this._currentTheme.asObservable();

  constructor(private cookieService: CookieService) {
    const theme = this.cookieService.get('theme');
    if (theme !== undefined) {
      this.updateThemeObject(theme);
    } else {
      this.updateThemeObject('light-theme');
    }
  }

  get themeObject() {
    return this._themeObject.getValue();
  }
  get currentTheme() {
    return this._currentTheme.getValue();
  }

  // get currentTheme() {
  //   return this.cookieService.get('theme');
  // }

  updateThemeObject(theme) {
    const themeObj: any = {};
    if (theme === 'dark-theme') {
      themeObj.lightColor = '#C0C0C0';
      themeObj.darkColor = '#424242';
    } else {
      themeObj.lightColor = '';
      themeObj.darkColor = '';
    }
    this.cookieService.set('theme', theme);
    this._themeObject.next(themeObj);
    this._currentTheme.next(theme);
  }
}
