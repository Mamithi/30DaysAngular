import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import {IProduct} from './product';

@Injectable()
export class ProductService {
  private _productUrl = 'http://scout.test/api/v1/app/products';
  // private _productUrl = 'src/app/products/products.json';
  constructor(private _http: Http) {}

  getProducts() {
    return this._http.get(this._productUrl)
      // .map((response: Response) => response.json()
      //   .do(data => console.log('All: ' + JSON.stringify(data)))
      //   .catch(this.handleError));
   .map((response: Response ) => response.json().products)
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
