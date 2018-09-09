import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HashEncodeService } from './hash-encode.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  apiAddress: string;

  constructor(
    private http: HttpClient,
    private data: HashEncodeService,
  ) {
    this.apiAddress = 'http://blog.test/api/v1/app/register';
  }

  registerUser(user: User): Observable<User> {
    const sentData = {
      'payload': this.data.encodeData(user),
      'hash': this.data.hashData(user)
    };

    return this.http.post<User>(this.apiAddress, sentData, httpOptions);
  }






}
