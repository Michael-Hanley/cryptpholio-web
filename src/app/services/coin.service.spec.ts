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
});
