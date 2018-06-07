import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserResponse {
  login: string,
  bio: string,
  company: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<UserResponse>('https://api.github.com/users/mamithi')
      .subscribe(
        data => {
          console.log("User Login: " + data.login);
          console.log("Bio: " + data.bio);
          console.log("Company Infromation: " + data.company);

        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side Error occured");
          } else {
            console.log("Server-side error occured");
          }
        }
      )


    const req = this.http.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    }).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured");
        } else {
          console.log("Server side error occured");
        }
      }
    )
  }


}
