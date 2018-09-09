import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  public loader = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

}
