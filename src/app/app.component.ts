import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrenciesInfo } from './Models/CurrenciesInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app03';
  currArray: CurrenciesInfo[] = [];
  constructor(public apiCaller: HttpClient) {
  }

  ngOnInit(): void {
    this.apiCaller.get('https://api.fastforex.io/currencies?').subscribe((data: any) => {

      for (let key in data.currencies) {
        let currency = new CurrenciesInfo();
        currency.name = data.currencies[key];
        currency.symbol = key;
        this.currArray.push(currency);
      }

    }
    );
  }
}





