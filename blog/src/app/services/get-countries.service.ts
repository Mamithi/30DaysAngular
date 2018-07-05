import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {
  apiAddress: string;

  constructor(private http: HttpClient) { 
    this.apiAddress = 'http://blog.test/api/v1/app/countries';
  }

  getCountries(){
    return this.http.get(this.apiAddress);
  }

  transformCountries(value) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }

}
