import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { HashEncodeService } from './hash-encode.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
  })
};

@Injectable({
  providedIn: 'root'
})

export class AddPostService {
  apiAddress: string;


  constructor(
    private http: HttpClient,
    private data: HashEncodeService,
  ) {
    this.apiAddress = 'http://blog.test/api/v1/app/auth/save/post';
  }

  savePost(post: Post): Observable<Post> {
    const payload = this.data.encodeData(post);
    const hash = this.data.hashData(post);

    return this.http.post<Post>(
      this.apiAddress,
      {
        'payload': payload,
        'hash': hash,
      },
      httpOptions);
  }
}
