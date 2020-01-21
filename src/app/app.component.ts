import { Component, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ThemeService } from './services/theme.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('iconChange', [
      state('true',
        style({ transform: 'rotate( -90deg )' })
      ),
      state('false',
        style({ transform: 'rotate( 0deg )' })
      ),
      transition('* => *', animate('.2s'))
    ])
  ]
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
  ngOnDestroy(): any {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
