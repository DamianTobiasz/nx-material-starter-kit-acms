import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UserModel> {
    return this._httpClient.get(undefined, undefined).pipe(map((arrayBuffer): UserModel => undefined));

  }

  add(): Observable<void> {
    // return this._httpClient.post(undefined, undefined, undefined).pipe(map(_ => void 0));
    console.log('method was invoked');
    return of(void 0);
  }
}
