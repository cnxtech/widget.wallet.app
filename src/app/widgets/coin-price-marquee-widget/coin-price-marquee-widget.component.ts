import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from './../../../environments/environment';

@Component({
  selector: 'coin-price-marquee-widget',
  templateUrl: './coin-price-marquee-widget.component.html',
  styleUrls: ['./coin-price-marquee-widget.component.less'],
  providers: [HttpClient]
})
export class CoinPriceMarqueeWidgetComponent implements OnInit {

    @Input('coin-ids') coinIds: string;
    @Input() currency: string;
    @Input() locale: string;
    @Input() width: number;
    public _elementRef: ElementRef;
    private _http: HttpClient;
    // private _apiUrl: string;
    public _data: any[];
    public _powerd_by: any[];
    public _showCoins: any[] = [];
    public _currencyOptions: string[];
    public _vs_currency: string;
    private _init: boolean = false;
    constructor(http: HttpClient, elementRef: ElementRef) {
        this._elementRef = elementRef;
        if (!this.coinIds) {
            this.coinIds = this._elementRef.nativeElement.getAttribute('coin-ids');
        }
        if (!this.currency) {
            this.currency = this._elementRef.nativeElement.getAttribute('currency');
        }
        if (!this.locale) {
            this.locale = this._elementRef.nativeElement.getAttribute('locale');
        }
        if (!this.width) {
            this.width = this._elementRef.nativeElement.getAttribute('width');
        }
        this._http = http;
        this._powerd_by = [
            {key: 'en', value: 'Powered by'},
            {key: 'es', value: 'Con tecnología de'},
            {key: 'de', value: 'Präsentiert von'},
            {key: 'nl', value: 'Powered by'},
            {key: 'pt', value: 'Fornecido por'},
            {key: 'fr', value: 'Fourni par'},
            {key: 'it', value: 'Offerto da'},
            {key: 'hu', value: 'Powered by'},
            {key: 'ro', value: 'Powered by'},
            {key: 'sv', value: 'Powered by'},
            {key: 'pl', value: 'Treść dostarczona przez'},
            {key: 'id', value: 'Didukung oleh'},
            {key: 'zh', value: 'Powered by'},
            {key: 'zh-tw', value: 'Powered by'},
            {key: 'ja', value: 'Powered by'},
            {key: 'ko', value: 'Powered by'},
            {key: 'ru', value: 'От'},
            {key: 'ar', value: 'برعاية '},
            {key: 'th', value: 'ขับเคลื่อนด้วย'},
            {key: 'vi', value: 'Được hỗ trợ bởi'},
            {key: 'tr', value: 'tarafından desteklenmektedir'},
        ];
    }

    updateApiUrl() {
        this.currency =  this.currency.toLowerCase();
        // this._apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=' + this.currency + '&ids=' + this.coinIds + '&locale=' + this.locale;
    }
    ngOnInit() {
        if(this.width > 0 && this.width < 300) {
            this.width = 300;
        }
        this.getData();
        this._init = true;
    }


    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
        if (this._init) {
            this.getData();
        }
    }

    getData() {
        if (this.coinIds.length) {
            this.updateApiUrl();
            const data = {
                currency: this.currency,
                coinIds: this.coinIds,
                locale: this.locale
            }
            this._http.post(environment.apiOrigin + '/api/get-market-data', data).subscribe(
                (data: any) => {
                    // this._data = data;
                    this._currencyOptions = data.map(item => item.symbol);
                    const coinIdsArray = this.coinIds.split(',');
                    this._showCoins = data.filter(item => coinIdsArray.includes(item.id));
                    // console.log("data", this._data);
                    // console.log("coinIdsArray", coinIdsArray);
                    // console.log("_showCoins", this._data.filter(item => coinIdsArray.includes(item.id)));
                }
            );
        }
    }

    getPowerBy() {
        const powerByArray = this._powerd_by.map(item => item.key);
        const key = powerByArray.indexOf(this.locale.toLowerCase());
        return this._powerd_by[key].value;
    }

    fixCurrentPrice(price) {
        const numberOfZeros = price.toString().split('0').length;
        const decimalAfterDotNumber = 2 + parseInt(numberOfZeros);
        return price.toPrecision(6);
    }

}
