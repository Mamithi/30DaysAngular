import { Component, OnInit } from '@angular/core';
import { NewsPostService } from '../services/news_post.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  data;

  constructor(private news_post_service: NewsPostService) { }

  ngOnInit() {
    this.news_post_service.getPosts().subscribe(res => this.data = res.data)
  }

}
