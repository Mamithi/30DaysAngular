import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello World</h1>
    <app-events></app-events>  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
