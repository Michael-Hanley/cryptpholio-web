import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinNewsComponent } from './coin-news.component';

describe('CoinNewsComponent', () => {
  let component: CoinNewsComponent;
  let fixture: ComponentFixture<CoinNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
