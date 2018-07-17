import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() links;
  @Input() meta;

  @Output() sendPageNumberToParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.links;
    this.meta;
  }

  pages(last_page: number): any[] {
    return Array(last_page);
  }

  sendPaginationNumber(pageNumber: string){
    this.sendPageNumberToParent.emit(pageNumber)
  }

}
