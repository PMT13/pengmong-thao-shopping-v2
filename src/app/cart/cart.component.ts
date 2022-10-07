import { Component, OnInit } from '@angular/core';
import {ICart} from "../interfaces/ICart";
import {StatusService} from "../status.service";
import {DataService} from "../data.service";
import {ICartItem} from "../interfaces/ICartItem";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartInfo!: ICart;
  cartItems: ICartItem[] = [];

  constructor(private status: StatusService ,private data: DataService) {
    this.data.$cart.subscribe((cart) => {
      this.cartInfo = cart;
      this.updateCartProducts();
    });
    this.data.getCart();
    this.cartInfo = this.data.cart;
  }

  ngOnInit(): void {
  }

  updateCartProducts(){
    this.cartItems = [];
    for(let item of this.cartInfo.productList){
      this.cartItems.push(item);
    }
  }

}
