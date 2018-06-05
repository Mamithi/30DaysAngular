import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  newPost: Observable<any>;

  constructor(private http: HttpClient) { }

  getPosts() {
    let params = new HttpParams().set('userId', '5');

    this.posts = this.http.get(this.ROOT_URL + '/posts', { params });
  }

  createPost() {
    const data: Post = {
      id: null,
      userId: 23,
      title: 'My New Post',
      body: 'Hello World!'

    }

    this.newPost = this.http.post(this.ROOT_URL + '/posts', data)
  }
}
