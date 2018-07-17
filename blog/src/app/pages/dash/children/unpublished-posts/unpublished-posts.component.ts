import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../services/post.service';

@Component({
  selector: 'app-unpublished-posts',
  templateUrl: './unpublished-posts.component.html',
  styleUrls: ['./unpublished-posts.component.css']
})
export class UnpublishedPostsComponent implements OnInit {
  posts: any;
  links: any;
  meta: any;

  constructor(
    private post_service: PostService
  ) { }

  ngOnInit() {
    this.post_service.getUnpublishedPosts().subscribe(
      (res: any) => this.posts = res.data
    );
  }

}
