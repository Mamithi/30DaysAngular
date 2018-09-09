import { PostService } from './../../../../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-published-posts',
  templateUrl: './published-posts.component.html',
  styleUrls: ['./published-posts.component.css']
})
export class PublishedPostsComponent implements OnInit {
  posts: any;
  links: any;
  meta: any;

  constructor(
    private post_service: PostService
  ) { }

  ngOnInit() {
    this.post_service.getPublishedPosts().subscribe((res: any) => this.posts = res.data);
    this.post_service.getPublishedPosts().subscribe((res: any) => this.links = res.links);
    this.post_service.getPublishedPosts().subscribe((res: any) => this.meta = res.meta);
  }

}
