import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends BaseService {

  endPoint = 'settings';

  constructor(
    http: HttpClient,
  ) {
    super(http);
  }
}
