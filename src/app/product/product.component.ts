import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../interfaces/IProduct";
import {HttpService} from "../http.service";
import {ICartItem} from "../interfaces/ICartItem";
import { v4 as uuidv4 } from 'uuid';
import {StatusService} from "../status.service";
import {DataService} from "../data.service";
import {ICart} from "../interfaces/ICart";
import {IAccount} from "../interfaces/IAccount";
import {first} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: IProduct;
  quantity: number = 1;
  cart: ICart = this.data.cart;
  user: IAccount = this.status.getUser();

  constructor(private status: StatusService ,private data: DataService, private httpService: HttpService) {

  }

  ngOnInit(): void {
  }

  addToCart(){
    const item: ICartItem = {id: uuidv4(), count: this.quantity, product: this.product};
    this.cart.productList.push(item);
    this.httpService.updateCart(this.cart).pipe(first()).subscribe({
      next: () => {
        this.data.getCart();
        this.data.changeCartSize(this.quantity);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  addQuantity(){
    this.quantity++;
  }

  minusQuantity(){
    this.quantity--;
  }
}

