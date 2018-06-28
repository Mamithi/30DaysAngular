import { Component, OnInit, Input } from '@angular/core';
import { SinglePostService } from '../../services/single-post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  post;
  topic;

  constructor(private single_post: SinglePostService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.single_post.getPost(id).subscribe(res => this.post = res);

  }

  

}
