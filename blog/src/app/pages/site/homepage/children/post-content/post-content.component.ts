import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../../../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  post;
  topic;

  constructor(private post_service: PostService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.post_service.getPost(id).subscribe(res => this.post = res);

  }



}
