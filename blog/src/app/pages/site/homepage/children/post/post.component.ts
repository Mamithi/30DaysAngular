import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  post;
  id = +this.route.snapshot.paramMap.get('id');
  constructor(
    private post_service: PostService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.post_service.getPost(this.id).subscribe(res => this.post = res);
  }

  goBack(): void {
    this.location.back();
  }

}
