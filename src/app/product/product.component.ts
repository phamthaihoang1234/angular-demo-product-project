import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = {};
  products: Product[] = [{
    id: 1,
    name: 'IPhone12',
    price: 12222
  }, {
    id: 2,
    name: 'IPhone14',
    price: 1224
  }, {
    id: 3,
    name: 'IPhone14',
    price: 1225
  }];
  constructor() { }

  ngOnInit() {
  }

}
