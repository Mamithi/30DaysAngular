import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  links;
  meta;

  constructor(private post_service: PostService) { }

  ngOnInit(): void {
    this.post_service.getPosts().subscribe((res : any) => this.data = res.data);
    this.post_service.getPosts().subscribe((res : any)  => this.links = res.links);
    this.post_service.getPosts().subscribe((res : any)  => this.meta = res.meta);
  }
}

