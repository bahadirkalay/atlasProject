import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../coin.component';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  result: any;
  currencyCode: any;
  display: any;

  constructor(private http: HttpClient) { }
  // public getCoinData() {
  //   return this.http.get<any>("https://api.coincap.io/v2/assets");
  // }
  getCoinData() {

    const list =
      "BTC,XRP,BCH,ETH,ZEC,EOS,XMR,ETC,LTC,DASH,QTUM,NEO,XLM,TRX,ADA,BTS,USDT,XUC,PAX,IOT";
    return this.http
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" +
        list +
        "&tsyms=USD"
      )
      .pipe(map((result) => (this.result = result)));

  }
}





