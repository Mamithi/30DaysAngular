import { HealthPostService } from './../../../../../services/health_post.service';
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

  constructor(private health_post_service: HealthPostService) { }

  ngOnInit() {
    this.health_post_service.getPosts().subscribe((res: any) => this.data = res.data);
    this.health_post_service.getPosts().subscribe((res: any) => this.meta = res.meta);
    this.health_post_service.getPosts().subscribe((res: any) => this.links = res.links);
    this.title = 'Health and Fitness';
    this.page = 'health';

    this.goToPageSelected(1);
  }

  goToPageSelected(pageNumber: number) {
    if (pageNumber) {
      this.health_post_service.getPaginatedPosts(pageNumber).subscribe(
        (res: any) =>
         this.data = res.data
        );
    }
  }

}
