import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CheckEmailService {
  private apiAddress = 'http://blog.test/api/v1/app/check/email';

  constructor(private http: HttpClient) { }

  checkUniqueEmail(email){
    return this.http.post(this.apiAddress, {"email" : email}, httpOptions)
  }
}
