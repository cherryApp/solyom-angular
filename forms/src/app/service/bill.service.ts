import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BillService extends BaseService {

  endPoint = 'bill';

  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient);
  }

}
