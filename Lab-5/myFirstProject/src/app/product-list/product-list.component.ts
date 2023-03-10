import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  // products = products;
  // @ts-ignore
  public categoryId: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const routerParams = this.route.snapshot.paramMap;
    this.categoryId = Number(routerParams.get('categoryId'));
  }

  // share() {
  //   window.alert('The product has been shared!');
  // }

  // onNotify() {
  //   window.alert('You will be notified when the product goes on sale');
  // }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
