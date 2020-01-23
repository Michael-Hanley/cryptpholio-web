import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CoinService } from './coin.service';

describe('CoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinService],
      imports: [HttpClientTestingModule, MatProgressSpinnerModule]
    });
  });

  it('should be created', inject([CoinService], (service: CoinService) => {
    expect(service).toBeTruthy();
  }));

  it('should call getHistory with "7d"', inject([CoinService], (service: CoinService) => {
    expect(service.constructHistoryUrl('test-coin', '7d'))
      .toBe('https://min-api.cryptocompare.com/data/histohour?fsym=test-coin&tsym=USD&limit=168&aggregate=1&e=CCCAGG');
  }));

  it('should call getHistory with "24h"', inject([CoinService], (service: CoinService) => {
    expect(service.constructHistoryUrl('test-coin', '24h'))
      .toBe('https://min-api.cryptocompare.com/data/histominute?fsym=test-coin&tsym=USD&limit=1440&aggregate=1&e=CCCAGG');
  }));

  it('should call getHistory with "1h"', inject([CoinService], (service: CoinService) => {
    expect(service.constructHistoryUrl('test-coin', '1h'))
      .toBe('https://min-api.cryptocompare.com/data/histominute?fsym=test-coin&tsym=USD&limit=60&aggregate=1&e=CCCAGG');
  }));

  it('should call getHistory with "1m"', inject([CoinService], (service: CoinService) => {
    expect(service.constructHistoryUrl('test-coin', '1m'))
      .toBe('https://min-api.cryptocompare.com/data/histohour?fsym=test-coin&tsym=USD&limit=720&aggregate=1&e=CCCAGG');
  }));

  it('should call getHistory with "6m"', inject([CoinService], (service: CoinService) => {
    expect(service.constructHistoryUrl('test-coin', '6m'))
      .toBe('https://min-api.cryptocompare.com/data/histoday?fsym=test-coin&tsym=USD&limit=183&aggregate=1&e=CCCAGG');
  }));

  it('should call getHistory with "1y"', inject([CoinService], (service: CoinService) => {
    expect(service.constructHistoryUrl('test-coin', '1y'))
      .toBe('https://min-api.cryptocompare.com/data/histoday?fsym=test-coin&tsym=USD&limit=365&aggregate=1&e=CCCAGG');
  }));

  it('should call getHistory with "3y"', inject([CoinService], (service: CoinService) => {
    expect(service.constructHistoryUrl('test-coin', '3y'))
      .toBe('https://min-api.cryptocompare.com/data/histoday?fsym=test-coin&tsym=USD&limit=1095&aggregate=1&e=CCCAGG');
  }));
});
