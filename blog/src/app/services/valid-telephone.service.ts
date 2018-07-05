import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ValidTelephoneService {
  private apiAddress = 'http://blog.test/api/v1/app/valid/telephone';


  constructor(private http: HttpClient) { }

  validateTelephone(telephone){
    return this.http.post(this.apiAddress, {"telephone" : telephone}, httpOptions)
  }
}
