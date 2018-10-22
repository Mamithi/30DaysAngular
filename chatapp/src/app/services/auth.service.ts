import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken() {
    return `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcxZmVhMmQyNmRlYTh
    jYWY4NzY0NjUzNGJlYzYxNTZkN2EwNTZiMDE2Mzg0NjQ4MDZjYTQzOTk1Mzg1OWQxYWZl
    NzkwYTE0NTcxNjc2OTEwIn0.eyJhdWQiOiIyIiwianRpIjoiNzFmZWEyZDI2ZGVhOGNhZjg3NjQ2NTM0Y
    mVjNjE1NmQ3YTA1NmIwMTYzODQ2NDgwNmNhNDM5OTUzODU5ZDFhZmU3OTBhMTQ1NzE2NzY5MTAiLCJpYXQiOj
    E1MzkyNDU4ODMsIm5iZiI6MTUzOTI0NTg4MywiZXhwIjoxNTcwNzgxODgzLCJzdWIiOiIxIiwic2NvcGVzIjpbI
    ioiXX0.GL05s23EgAn-qLc7ZiGq95KBFZyCWIBYOz7pXW8tp2pyWYk2vz5-w0u62NcZkgpa-i9qLu86Ln2YJSv0R
    QS-Jdl1FY-cmc1u80uJt0pfcO7-da7-cZpDFkbyqlkOnTnN0UnWFVehuCwGEyOLxigDsH1SuW0yj_CDQy-K7E1JuW_
    v5gyGEHO-RgYuSDLWQ3yAo6orifc2pKsEo1B2h3euh4Ttcdh8p10LXCNhW5OSy5Nx_9nGzHseiNfrmK29LEPeX8r_cj
    d4bwUbTP7yXlqZwUo_tLa5mrVc9IrutCMX9y3MbunYQSJpImCg8wQW2v9C7E6DC2vixT2dJtYCAu-xND3EV3u3xUogk
    sEjXUkdu9YSmVKo4gUrKgaZ9xu9i3R7f2GVC640bSixzpjinVGYOQQL-eSvwzp7XvxAqh7_cWGP9DaH4ksDxMJE8K-r
    u22vN49tNlqJjtZUHFqqZjUcfkvrtqvyillsqyT-kzbk4FsI_obxB_ZmljVJKRGO9y8cUjbPaBnT1tFjYR72I6kjK7lQX
    cltKSe3OXHQQXVY5DUrqKJAy5VjYpdsE9Q991jm5KHgbqfzvGqNAgSXy1wggNBcjiJ0zcETbuU1HphjASMsDJ_OY81yNB
    oz2ZHCRfmMcOWSUv3PjwtXx_6tlVD7DP58YTQ0-k-htH7z66iDSCc`;
  }
}
