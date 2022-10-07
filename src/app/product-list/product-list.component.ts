import { Component, OnInit } from '@angular/core';
import {IProduct} from "../interfaces/IProduct";
import {DataService} from "../data.service";
import {first} from "rxjs";
import {StatusService} from "../status.service";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: IProduct[] = this.data.productList;

  constructor(private status: StatusService ,private data: DataService, private httpService: HttpService) {
    this.data.$productList.subscribe((list) => {
      this.productList = list;
    });
  }

  ngOnInit(): void {
  }
}

