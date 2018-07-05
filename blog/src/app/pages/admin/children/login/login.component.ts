import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { LoginData } from '../../../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  client_id = 2;
  client_secret = 'XpUFhsMhJdJaxvoedSJfd0kis7SOrURAXYvH0J4P';
  scope = '*';
  grant_type = 'password'
  invalid = false;


  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  login_data = new LoginData(this.grant_type, this.client_id, this.client_secret, '', '', this.scope);

  login() {
    this.auth.loginUser(this.login_data).subscribe(
      (res: any) => {
        this.invalid = false;
        this.router.navigate(['/dash/landing']);
        this.auth.setAccessToken(res.access_token);
        this.auth.setExpiryTime(res.expires_in);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("client-side error occured");
        } else {
          this.invalid = true;
          console.log("Server-side error occured");
        }
      }
    );
  }


  ngOnInit() {
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }


}
