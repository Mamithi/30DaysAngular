import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  commentForm = this.fb.group({
    'post_id': [''],
    'username' : ['', Validators.required],
    'email' : ['', Validators.required],
    'comment' : ['', Validators.required],
  });

  post;
  id = +this.route.snapshot.paramMap.get('id');
  constructor(
    private post_service: PostService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.post_service.getPost(this.id).subscribe(res => this.post = res);
  }


  goBack(): void {
    this.location.back();
  }

  saveComment() {
    console.log(this.commentForm.value);
    this.post_service.addComment(this.commentForm.value).subscribe(res => {
      console.log(res);
    });
  }

}
