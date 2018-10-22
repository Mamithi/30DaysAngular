import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  })
};


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }

  fetchMessages() {
    return this.http.get('http://auth.tospay.test/api/v1/message', httpOptions);
  }

  saveMessage(message) {
    const payload = {
      'message' : message
    };
    return this.http.post('http://auth.tospay.test/api/v1/message', payload, httpOptions);
  }

  checkUser() {
    return this.http.get('http://chatapp.test/api/user/info',  httpOptions);
  }
}
