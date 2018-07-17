import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SinglePostService } from '../../../../services/single-post.service';

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
    private single_post: SinglePostService,
  ) { }

  ngOnInit() {
    console.log(this.id)    
    this.single_post.getPost(this.id).subscribe(res => this.post = res);

  }

  goBack(): void {
    this.location.back();
  }

}
