import {Component, OnInit} from '@angular/core';

import { IProduct} from './product';

@Component({
  selector: 'pm-products',
  moduleId: module.id,
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: IProduct[] = [
    {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'https://www.arthritissupplies.com/assets/images/agc320-garden-cart-3w.jpg'
    },
    {
      'productId': 5,
      'productName': 'Hammer',
      'productCode': 'TBX-0048',
      'releaseDate': 'March 21, 2016',
      'description': 'Good Condition',
      'price': 8.99,
      'starRating': 4.8,
      'imageUrl': 'https://images.homedepot-static.com/productImages/a619a055-6979-4b47-b0da-5dfa09d6ca2b/svn/hdx-claw-hammers-n-a10shd-64_1000.jpg'
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In On init');
  }

}
