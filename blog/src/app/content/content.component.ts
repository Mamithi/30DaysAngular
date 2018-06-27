import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  @Input() posts;
  constructor() { }

  ngOnInit() {
   this.posts;
  }

}
