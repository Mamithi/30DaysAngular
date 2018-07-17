import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';``

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
  })
};

@Injectable({
  providedIn: 'root'
})


export class PostService {
  baseUrl: string;
  data: Array<Post> = [];

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://blog.test/api/v1/app';
  }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseUrl + '/fetch/posts');
  }

  getPaginatedPosts(pageNumber: number){
    return this.http.get<Array<Post>>(this.baseUrl + '/fetch/posts?page=' + pageNumber);
  }

  getUnpublishedPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseUrl + '/auth/unpublished/posts', httpOptions);
  }

  getPublishedPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseUrl + '/auth/published/posts', httpOptions);
  }

}