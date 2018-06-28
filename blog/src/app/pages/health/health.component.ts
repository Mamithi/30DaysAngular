import { Component, OnInit } from '@angular/core';
import { HealthPostService } from '../../services/health_post.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  data;
  title;

  constructor(private health_post_service: HealthPostService) { }

  ngOnInit() {
    this.health_post_service.getPosts().subscribe((res : any) => this.data = res.data);
    this.title = 'Health and Fitness';
  }

}
