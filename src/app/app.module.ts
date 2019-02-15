import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TwinsCoinListWidgetComponent } from './widgets/twins-coin-list-widget/twins-coin-list-widget.component';
import { CoinPriceMarqueeWidgetComponent } from './widgets/coin-price-marquee-widget/coin-price-marquee-widget.component';

const bootstrap = [
    TwinsCoinListWidgetComponent, CoinPriceMarqueeWidgetComponent
];
@NgModule({
  declarations: [
    // TwinsCoinListWidgetComponent,
    // CoinPriceMarqueeWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: bootstrap
})
export class AppModule { }
