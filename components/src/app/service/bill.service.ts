import { Injectable } from '@angular/core';
import { Bill } from '../model/bill';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  list: Bill[] = [
    new Bill({
      szlaszam: 'LUK-2020-21458', db: 1, afaKulcs: '27', fizHat: new Date(2020, 5, 30),
      kiallDatum: new Date(), kibocsajto: 'Lukoil Hungary Man. Kft. Bp. XXII. Lukoil út 22.',
      me: 'db', nOsszeg: 5000, teljDatum: new Date(), termek: 'ESZ-95', vevo: 'Nyugtás Vevő'
    }),
    new Bill({
      szlaszam: 'LUK-2020-21459', db: 1, afaKulcs: '27', fizHat: new Date(2020, 5, 24),
      kiallDatum: new Date(), kibocsajto: 'Lukoil Hungary Man. Kft. Bp. XXII. Lukoil út 23.',
      me: 'db', nOsszeg: 20000, teljDatum: new Date(), termek: 'ESZ-95', vevo: 'Nyugtás Vevő'
    }),
    new Bill({
      szlaszam: 'LUK-2020-21460', db: 1, afaKulcs: '27', fizHat: new Date(2020, 5, 23),
      kiallDatum: new Date(), kibocsajto: 'Lukoil Hungary Man. Kft. Bp. XXII. Lukoil út 24.',
      me: 'db', nOsszeg: 100000, teljDatum: new Date(), termek: 'ESZ-95', vevo: 'Nyugtás Vevő'
    }),
  ];

  apiUrl = 'http://localhost:3000/bill/';

  constructor(
    private http: HttpClient,
  ) {}

  get(id?: string|number): Observable<any> {
    return this.http.get(`${this.apiUrl}${ id ? id : '' }`);
  }

  delete(id: string|number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
