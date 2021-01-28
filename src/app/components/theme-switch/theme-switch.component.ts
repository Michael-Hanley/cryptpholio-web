import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {
  currentTheme = 'light-theme';
  darkMode = false;

  constructor(private themeService: ThemeService) { }

  changeTheme() {
    this.currentTheme = this.currentTheme !== 'dark-theme' ? 'dark-theme' : 'light-theme';
    this.themeService.updateThemeObject(this.currentTheme);
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.darkMode = this.currentTheme === 'dark-theme' ? true : false;
  }

}
