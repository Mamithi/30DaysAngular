import {Component} from '@angular/core';
import {ProductService} from './products/product.service';


@Component({
  selector: 'pm-app',
  template: `    
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a>{{pageTitle}}</a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" [routerLink]="['/welcome']">Home</a>
              <a class="nav-item nav-link" [routerLink]="['/products']">Products</a>
            </div>
          </div>
        </nav>
        <div class="container">
          <router-outlet></router-outlet>
        </div>
      </div>
  `,
  providers: [ProductService]
})

export class  AppComponent {
  pageTitle = 'Acme Product Management';
}
