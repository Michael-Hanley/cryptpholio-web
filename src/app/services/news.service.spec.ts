import { TestBed, inject } from '@angular/core/testing';

import { NewsService } from './news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsService],
      imports: [HttpClientTestingModule]
    });
  });
  it('should be created', inject([NewsService], (service: NewsService) => {
    expect(service).toBeTruthy();
  }));
  it('Should return news', inject([NewsService, HttpTestingController], (service: NewsService, httpMock: HttpTestingController) => {
    const mockNews = {
      article: 'test-article'
    };

    service.getCoinNews('test-coin')
      .subscribe(testNews => {
        expect(testNews).toBe({'article': 'test-article'});
      });

    const req = httpMock.expectOne('https://min-api.cryptocompare.com/data/v2/news/?categories=test-coin');

    req.flush(mockNews);
    httpMock.verify();
  }));
});
