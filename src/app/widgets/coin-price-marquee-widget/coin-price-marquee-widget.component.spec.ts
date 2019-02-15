import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinPriceMarqueeWidgetComponent } from './coin-price-marquee-widget.component';

describe('CoinPriceMarqueeWidgetComponent', () => {
  let component: CoinPriceMarqueeWidgetComponent;
  let fixture: ComponentFixture<CoinPriceMarqueeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinPriceMarqueeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinPriceMarqueeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
