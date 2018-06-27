import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;

  constructor(private post_service: PostService) { }

  ngOnInit(): void {
    this.post_service.getPosts().subscribe(res => this.data = res.data);
  }
}

