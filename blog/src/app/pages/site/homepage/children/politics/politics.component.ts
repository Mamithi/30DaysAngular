import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../../services/post.service';

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

  constructor(private post_service: PostService) { }

  ngOnInit() {
    this.post_service.getPoliticsPosts().subscribe((res: any)  => {
      this.data = res.data;
      this.meta = res.meta;
      this.links = res.links;
    });

    this.title = 'Politics';
    this.page = 'politics';
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
