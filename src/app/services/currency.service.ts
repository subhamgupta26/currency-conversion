import { HttpClient } from '@angular/common/http';
import { Currency } from './../models/currency';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {}

  getRates(): Observable<Currency[]> {
      return this.http.get<any>('http://data.fixer.io/api/latest?access_key=ec970502b62affb920859d798fbd4228').pipe(map(result => {
          return Object.keys(result.rates).map((key, index) => {
              return { code: key, value: result.rates[key] };
          });
      }));
  }
}
