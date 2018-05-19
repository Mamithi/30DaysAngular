import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {falseIfMissing} from "protractor/built/util";

@Injectable()
export class ProductDetailGuard implements CanActivate {
  constructor(private _router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid product id');
      // Start a new navigation to redirect to list page
      this._router.navigate(['/products']);
      // Abort current navigation
      return false;
    };
    return true;
  }
}
