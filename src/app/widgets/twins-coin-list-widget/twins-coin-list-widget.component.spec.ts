import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinsCoinListWidgetComponent } from './twins-coin-list-widget.component';

describe('TwinsCoinListWidgetComponent', () => {
  let component: TwinsCoinListWidgetComponent;
  let fixture: ComponentFixture<TwinsCoinListWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwinsCoinListWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwinsCoinListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
