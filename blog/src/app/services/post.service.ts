import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable, throwError } from 'rxjs';
import { HashEncodeService } from './hash-encode.service';
import { catchError } from 'rxjs/operators';

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

  constructor(
    private http: HttpClient,
    private payloadData: HashEncodeService
    ) {
    this.baseUrl = 'http://blog.test/api/v1/app';
  }

  savePost(post: Post): Observable<Post> {
    const payload = this.payloadData.encodeData(post);
    const hash = this.payloadData.hashData(post);

    return this.http.post<Post>(
      this.baseUrl + '/auth/save/post',
      {
        'payload': payload,
        'hash': hash,
      },
      httpOptions).pipe(
        catchError(this.handleError)
      );
  }

  getPost(id): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseUrl + '/fetch/post/' + id).pipe(
      catchError(this.handleError)
    );
  }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseUrl + '/fetch/posts').pipe(
      catchError(this.handleError)
    );
  }

  getPaginatedPosts(pageNumber: number) {
    return this.http.get<Array<Post>>(this.baseUrl + '/fetch/posts?page=' + pageNumber).pipe(
      catchError(this.handleError)
    );
  }

  getUnpublishedPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseUrl + '/auth/unpublished/posts', httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getPublishedPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseUrl + '/auth/published/posts', httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getFinancePosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseUrl + '/fetch/finance/posts').pipe(
      catchError(this.handleError)
    );
  }

  getHealthPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseUrl + '/fetch/health/posts').pipe(
      catchError(this.handleError)
    );
  }

  getNewsPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseUrl + '/fetch/news/posts').pipe(
      catchError(this.handleError)
    );
  }

  getPoliticsPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.baseUrl + '/fetch/news/posts').pipe(
      catchError(this.handleError)
    );
  }

  searchPosts(searchQuery): Observable<Array<Post>> {
    return this.http.post<Array<Post>>(this.baseUrl + '/search', {'search_query': searchQuery}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error || 'Server Error');
  }

}
