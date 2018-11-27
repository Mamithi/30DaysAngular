import { PostService } from './../../../../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post;
  id = +this.route.snapshot.paramMap.get('id');
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private post_service: PostService,
  ) { }

  ngOnInit() {
    console.log(this.id);
    this.post_service.getPost(this.id).subscribe(res => this.post = res);

  }

  goBack(): void {
    this.location.back();
  }

}
