import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<any>;

  constructor(private http: HttpClient) { }

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + '/posts?userId=1');
  }
}
