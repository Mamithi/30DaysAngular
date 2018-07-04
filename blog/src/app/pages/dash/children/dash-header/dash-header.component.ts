import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css']
})
export class DashHeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }


  logout(){
    this.auth.logout();
  }


}
