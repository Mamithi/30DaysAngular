import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../../../../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username : ['', Validators.required],
    password : ['', Validators.required],
    client_id : ['2'],
    client_secret : ['qWjy2nz9hKORlmXp0v8YJNmM5xqPgufhlK2WrojH'],
    scope : ['*'],
    grant_type : ['password'],
  });


  invalid_credentials = false;
  submitted = false;


  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) { }


  login() {
    this.auth.loginUser(this.loginForm.value).subscribe(
      (res: any) => {
        this.invalid_credentials = false;
        this.router.navigate(['/dash/landing']);
        this.auth.setAccessToken(res.access_token);
        this.auth.setExpiryTime(res.expires_in);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('client-side error occured');
        } else {
          this.invalid_credentials = true;
          console.log('Server-side error occured');
        }
      }
    );
  }


  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
  }


}
