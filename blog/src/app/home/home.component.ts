import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data$: Observable<Array<Post>>;
  data;

  constructor(private post_service: PostService) { }

  // showPosts(): void{
  //   this.data$ = this.post_service.getPosts().subscribe(res => this.data$ = res);
  // }

  // showPosts(): void {
  //   this.post_service.getPosts().subscribe(res => this.data = res);
  // }
  
  ngOnInit(): void {
    // this.showPosts();
    this.post_service.getPosts().subscribe(res => this.data = res.data);
  }
}

