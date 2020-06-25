import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  endPoint = 'user';

  constructor(
    http: HttpClient,
  ) {
    super(http);
  }
}
