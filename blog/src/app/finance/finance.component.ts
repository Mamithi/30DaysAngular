import { Component, OnInit } from '@angular/core';
import { FinancePostService } from '../services/finance_post.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  data;

  constructor(private finance_post_service: FinancePostService) { }

  ngOnInit() {
    this.finance_post_service.getPosts().subscribe(res => this.data = res.data);
  }

}
