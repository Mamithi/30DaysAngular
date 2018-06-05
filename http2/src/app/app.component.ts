import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';
import { User } from './models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data$: Observable<Array<User>>;

  constructor(private _svc: DataService) { }
  getData(): void {
   this.data$ = this._svc.getData();
  // return this._svc.getData().subscribe(res => console.log(res));
  }
}

