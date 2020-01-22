import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MarketTableComponent } from './market-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


describe('MarketTableComponent', () => {
  let component: MarketTableComponent;
  let fixture: ComponentFixture<MarketTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketTableComponent ],
      imports: [
        MatTableModule,
        MatIconModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
