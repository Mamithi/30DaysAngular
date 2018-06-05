import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiAddress: string;

  constructor(private _http: HttpClient) {
    this.apiAddress = 'https://jsonplaceholder.typicode.com/users';
   }

  getData(): Observable<Array<User>> {
     return this._http.get<Array<User>>(this.apiAddress);
  }
}
