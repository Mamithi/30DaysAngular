import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() links;
  @Input() meta: any;
  @Input() page;
   @Output() sendPageNumberToParent = new EventEmitter<number>();
   nextPage: number;
   currentPage: number;
   last_page: number;
   numberOfPages: number;



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  pages(numberOfPages): any[] {
    return Array(numberOfPages = this.meta.last_page);
  }

  sendPaginationNumber(pageNumber: number) {
    this.sendPageNumberToParent.emit(pageNumber);
  }

  goToNextPage(): void {
    console.log(this.meta.last_page);
    this.currentPage = +this.route.snapshot.paramMap.get('id');
    if (this.currentPage < this.meta.last_page) {
      this.nextPage = this.currentPage + 1;
    } else {
      this.nextPage = this.meta.last_page;
    }
    this.sendPaginationNumber(this.nextPage);
  }

}
