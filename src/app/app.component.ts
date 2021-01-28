import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  currentTheme = 'light-theme';
  isCollapsed;
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(private themeService: ThemeService) {
    this.themeService._currentTheme$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(theme => { this.currentTheme = theme; });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
