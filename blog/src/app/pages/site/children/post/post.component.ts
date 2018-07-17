import { Component, OnInit, Input } from '@angular/core';
import { SinglePostService } from '../../../../services/single-post.service';
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
    private single_post: SinglePostService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  

  ngOnInit() {
    this.single_post.getPost(this.id).subscribe(res => this.post = res);
  }

  goBack(): void{
    this.location.back();
  }
  

}
