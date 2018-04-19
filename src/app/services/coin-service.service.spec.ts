import { TestBed, inject } from '@angular/core/testing';

import { CoinService } from './coin-service.service';

describe('CoinServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinService]
    });
  });

  it('should be created', inject([CoinService], (service: CoinService) => {
    expect(service).toBeTruthy();
  }));
});
