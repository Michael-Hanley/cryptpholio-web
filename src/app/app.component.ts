import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ThemeService } from './services/theme.service';

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
export class AppComponent {
  isCollapsed;
  title = 'app';
  currentTheme = 'light-theme';
  darkMode = false;

  constructor(private themeService: ThemeService) {

  }
  changeTheme() {
    this.currentTheme = this.currentTheme !== 'dark-theme' ? 'dark-theme' : 'light-theme';
    this.themeService.updateThemeObject(this.currentTheme);
  }
}
