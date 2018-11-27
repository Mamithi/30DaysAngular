import { PostService } from './../../../../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  data;
  title;
  links;
  meta;
  page;

  constructor(private post_service: PostService) { }

  ngOnInit() {
    this.post_service.getHealthPosts().subscribe((res: any) =>  {
      this.data = res.data;
      this.meta = res.meta;
      this.links = res.links;
      });
    this.title = 'Health and Fitness';
    this.page = 'health';

    this.goToPageSelected(1);
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
