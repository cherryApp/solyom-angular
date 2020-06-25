import { Injectable } from '@angular/core';
import { Bill } from '../model/bill';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {

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

  update(bill: Bill): Observable<any> {
    return this.http.put(`${this.apiUrl}${bill.id}`, bill);
  }

  create(bill: Bill): Observable<any> {
    return this.http.post(`${this.apiUrl}`, bill);
  }
}
