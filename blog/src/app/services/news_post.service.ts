import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';``

@Injectable({
  providedIn: 'root'
})
export class NewsPostService {
  apiAddress: string;
  data: Array<Post> = [];

  constructor(private http: HttpClient) {
    this.apiAddress = 'http://blog.test/api/v1/app/fetch/news/posts';
  }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.apiAddress);
  }

  getPaginatedPosts(pageNumber: number){
    return this.http.get<Array<Post>>(this.apiAddress + '?page=' + pageNumber);
  }
}