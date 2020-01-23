import { TestBed } from '@angular/core/testing';

import { RouteService } from './route.service';

describe('RouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteService = TestBed.get(RouteService);
    expect(service).toBeTruthy();
  });
  it('themeObject should return value from observable', () => {
    const service: RouteService = TestBed.get(RouteService);
    service.updateMarketParams('test-location');
    expect(service.marketParams).toBe('test-location');
  });
});
