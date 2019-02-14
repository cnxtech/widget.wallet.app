import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TwinsCoinListWidgetComponent } from './widgets/twins-coin-list-widget/twins-coin-list-widget.component';

@NgModule({
  declarations: [
    TwinsCoinListWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [TwinsCoinListWidgetComponent]
})
export class AppModule { }
