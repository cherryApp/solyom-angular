import { Injectable } from '@angular/core';
import { Bill } from '../model/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  list: Bill[] = [
    new Bill({
      szlaszam: 'LUK-2020-21458', db: 1, afaKulcs: '27', fizHat: new Date(2020, 5, 25),
      kiallDatum: new Date(), kibocsajto: 'Lukoil Hungary Man. Kft. Bp. XXII. Lukoil út 22.',
      me: 'db', nOsszeg: 20000, teljDatum: new Date(), termek: 'ESZ-95', vevo: 'Nyugtás Vevő'
    }),
    new Bill({
      szlaszam: 'LUK-2020-21459', db: 1, afaKulcs: '27', fizHat: new Date(2020, 5, 25),
      kiallDatum: new Date(), kibocsajto: 'Lukoil Hungary Man. Kft. Bp. XXII. Lukoil út 22.',
      me: 'db', nOsszeg: 20000, teljDatum: new Date(), termek: 'ESZ-95', vevo: 'Nyugtás Vevő'
    }),
    new Bill({
      szlaszam: 'LUK-2020-21460', db: 1, afaKulcs: '27', fizHat: new Date(2020, 5, 25),
      kiallDatum: new Date(), kibocsajto: 'Lukoil Hungary Man. Kft. Bp. XXII. Lukoil út 22.',
      me: 'db', nOsszeg: 20000, teljDatum: new Date(), termek: 'ESZ-95', vevo: 'Nyugtás Vevő'
    }),
  ];

  constructor() {
    setInterval( () => {
      this.list.push(
        new Bill({
          szlaszam: 'LUK-2020-21460', db: 1, afaKulcs: '27', fizHat: new Date(2020, 5, 25),
          kiallDatum: new Date(), kibocsajto: 'Lukoil Hungary Man. Kft. Bp. XXII. Lukoil út 22.',
          me: 'db', nOsszeg: 20000, teljDatum: new Date(), termek: 'ESZ-95', vevo: 'Nyugtás Vevő'
        })
      );
    }, 5000);
  }
}
