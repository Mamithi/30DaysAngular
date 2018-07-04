import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  apiAddress: string;

  constructor(private http: HttpClient) { 
    this.apiAddress = 'http://blog.test/api/v1/app/register';
  }

  registerUser(user: User): Observable<User> {
      return this.http.post<User>(this.apiAddress, user, httpOptions);
  }

}
