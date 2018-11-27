import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../../services/post.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  data;
  title;
  meta;
  links;
  page;

  constructor(private post_service: PostService) { }

  ngOnInit() {
    this.post_service.getNewsPosts().subscribe((res: any)  => {
      this.data = res.data;
      this.meta = res.meta;
      this.links = res.links;
    });
    this.title = 'News';
    this.page = 'news';
  }

  goToPageSelected(pageNumber: number) {
    if (pageNumber) {
      this.post_service.getPaginatedPosts(pageNumber).subscribe(
        (res: any) =>
         this.data = res.data
        );
    }
  }

}
