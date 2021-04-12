import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoinService } from './service/coin.service'
import { Observable } from 'rxjs';



export class Coin {
  id: string;
  name: string;
  priceUsd: string;


  constructor(coin: any) {
    this.id = coin.id;
    this.name = coin.name;
    this.priceUsd = coin.priceUsd;

  }

}

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  coinData: any;
  objectKeys = Object.keys;
  cryptos: any;

  constructor(private http: HttpClient, private coinService: CoinService) { }

  ngOnInit(): void {
    this.coinService.getCoinData().subscribe((res) => {
      this.cryptos = res;
      console.table("API JSON data", this.cryptos);
    })

    // this.coinService.getCoinData().subscribe((response: any) => {
    //   console.log(response);
    //   for (let i = 0; i < response.data.length; i++) {
    //     this.coinData.push(new Coin(response.data[i]));

    //   }
    //   console.log(this.coinData);


    // // });
    // const time = new Observable<string>(observer => {
    //   setInterval(() => observer.next(new Date().toString()), 1000);
    // });

    // this.coinService.getCoinData().subscribe(x =>this.coinData=x);
    // console.log(this.coinData)


  }
}