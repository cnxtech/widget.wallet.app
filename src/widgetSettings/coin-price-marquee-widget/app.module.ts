import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { CoinPriceMarqueeWidgetComponent } from '../../app/widgets/coin-price-marquee-widget/coin-price-marquee-widget.component';

@NgModule({
  declarations: [
      CoinPriceMarqueeWidgetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [ CoinPriceMarqueeWidgetComponent ],
  // bootstrap: [CoinPriceMarqueeWidgetComponent]
})
export class AppModule {
    constructor(private injector: Injector) { }

    ngDoBootstrap() {
        const myCustomElement = createCustomElement(CoinPriceMarqueeWidgetComponent, { injector: this.injector });
        if (!customElements.get('coin-price-marquee-widget')) {
            customElements.define('coin-price-marquee-widget', myCustomElement);
        }
    }
}
