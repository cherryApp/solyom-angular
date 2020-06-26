import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../model/bill';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  apiUrl = 'http://localhost:3000/';
  endPoint: string;

  constructor(
    public http: HttpClient,
  ) {}

  getApiUrl() {
    return `${this.apiUrl}${this.endPoint}/`;
  }

  get(id?: string|number): Observable<any> {
    return this.http.get(`${this.getApiUrl()}${ id ? id : '' }`);
  }

  delete(id: string|number): Observable<any> {
    return this.http.delete(`${this.getApiUrl()}${id}`);
  }

  update(bill: Bill): Observable<any> {
    return this.http.put(`${this.getApiUrl()}${bill.id}`, bill);
  }

  create(bill: Bill): Observable<any> {
    return this.http.post(`${this.getApiUrl()}`, bill);
  }

}
