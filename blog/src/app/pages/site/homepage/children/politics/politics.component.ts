import { Component, OnInit } from '@angular/core';
import { PoliticsPostService } from '../../../../../services/politics_post.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {
  data;
  title;
  links;
  meta;
  page;

  constructor(private politics_post_service: PoliticsPostService) { }

  ngOnInit() {
    this.politics_post_service.getPosts().subscribe((res: any)  => this.data = res.data);
    this.politics_post_service.getPosts().subscribe((res: any) => this.meta = res.meta);
    this.politics_post_service.getPosts().subscribe((res: any) => this.links = res.links);
    this.title = 'Politics';
    this.page = 'politics';
  }

  goToPageSelected(pageNumber: number) {
    if (pageNumber) {
      this.politics_post_service.getPaginatedPosts(pageNumber).subscribe(
        (res: any) =>
         this.data = res.data
        );
    }
  }

}
