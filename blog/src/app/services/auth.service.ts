import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginData } from '../models/login.model';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiAddress: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.apiAddress = 'http://blog.test/oauth/token';
  }

  loginUser(login_data: LoginData): Observable<LoginData> {
    return this.http.post<LoginData>(this.apiAddress, login_data, httpOptions);
  }

  setAccessToken(access_token) {
    localStorage.setItem('access_token', access_token);
  }

  setExpiryTime(expires_in) {
    let now = new Date();
    now.setSeconds(now.getSeconds() + expires_in);
    localStorage['expiry_time'] = '' + now.getTime();
  }

  get isLoggedIn() {
    if (localStorage.getItem('access_token')) {

      let expiryDate: Date = new Date(parseInt(localStorage['expiry_time'], 10));
      let now: Date = new Date();
      if (expiryDate > now) {
        return true;
      } else {
        this.router.navigate(['/admin/login']);
        return false;
      }

    } else {
      this.router.navigate(['/admin/login']);
      return false;
    }
  }




  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expiry_time');
    this.router.navigate(['/admin/login']);
  }


}


