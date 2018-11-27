import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../../services/post.service';


@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  data;
  title;
  meta;
  links;
  page;

  constructor(private post_service: PostService) { }

  ngOnInit() {
    this.post_service.getFinancePosts().subscribe((res: any)  => {
      this.data = res.data;
      this.meta = res.meta;
      this.links = res.links;
    });
    this.title = 'Finance';
    this.page = 'finance';

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
