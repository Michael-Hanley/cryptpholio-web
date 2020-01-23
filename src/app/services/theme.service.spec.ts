import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeService = TestBed.get(ThemeService);
    expect(service).toBeTruthy();
  });
  it('calling update theme with "dark-theme" should yield dark-theme results', () => {
    const service: ThemeService = TestBed.get(ThemeService);
    expect(service.chooseTheme('dark-theme')).toMatchObject({darkColor: '#424242', lightColor: '#C0C0C0'});
  });
  it('themeObject should return value from observable', () => {
    const service: ThemeService = TestBed.get(ThemeService);
    service.updateThemeObject('dark-theme');
    expect(service.themeObject).toMatchObject({darkColor: '#424242', lightColor: '#C0C0C0'});
  });
});
