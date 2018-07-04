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

  setAccessToken(access_token){
    localStorage.setItem('access_token', access_token);
  }

  get isLoggedIn() {
    if(localStorage.getItem('access_token')){
      return true;
    }else{
      this.router.navigate(['/admin/login']);
      return false;
    }
  }

  logout(){
    localStorage.removeItem('access_token');
    this.router.navigate(['/admin/login']);
  }

  
}


