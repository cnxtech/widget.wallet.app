import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { TwinsCoinListWidgetComponent } from '../../app/widgets/twins-coin-list-widget/twins-coin-list-widget.component';

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
  entryComponents: [ TwinsCoinListWidgetComponent ],
  // bootstrap: [TwinsCoinListWidgetComponent]
})
export class AppModule {
    constructor(private injector: Injector) { }

    ngDoBootstrap() {
        const myCustomElement = createCustomElement(TwinsCoinListWidgetComponent, { injector: this.injector });
        if (!customElements.get('twins-coin-list-widget')) {
            customElements.define('twins-coin-list-widget', myCustomElement);
        }
    }
}
