import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';

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

  checkEmail(email: string, id: number | string): Observable<any> {
    return this.http.get(`${this.getApiUrl()}?email=${email}`).pipe(
      map( (users: User[]) => {
        if (users.length === 0 || '' + users[0].id === '' + id) {
          return null;
        }

        return {message: 'Az email cím foglalt'};
      })
    );
  }
}
