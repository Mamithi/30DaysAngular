import { Component, OnInit } from '@angular/core';
import { FinancePostService } from '../../../../../services/finance_post.service';


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

  constructor(private finance_post_service: FinancePostService) { }

  ngOnInit() {
    this.finance_post_service.getPosts().subscribe((res: any)  => this.data = res.data);
    this.finance_post_service.getPosts().subscribe((res: any) => this.meta = res.meta);
    this.finance_post_service.getPosts().subscribe((res: any) => this.links = res.links);
    this.title = 'Finance';
    this.page = 'finance';

    this.goToPageSelected(1);
  }

  goToPageSelected(pageNumber: number) {
    if (pageNumber) {
      this.finance_post_service.getPaginatedPosts(pageNumber).subscribe(
        (res: any) =>
         this.data = res.data
        );
    }
  }

}
