import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../interfaces/IProduct";
import {HttpService} from "../http.service";
import {ICartItem} from "../interfaces/ICartItem";
import { v4 as uuidv4 } from 'uuid';
import {StatusService} from "../status.service";
import {DataService} from "../data.service";
import {ICart} from "../interfaces/ICart";
import {IAccount} from "../interfaces/IAccount";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: IProduct;
  @Input() inCart!: boolean;      // this doesn't check to see if item is in cart, checks to see if we looking at our cart
  quantity: number = 1;
  cartCount: number = this.data.cartCount;
  cart: ICart = this.data.cart;
  user: IAccount = this.status.getUser();

  constructor(private status: StatusService ,private data: DataService, private httpService: HttpService) { }

  ngOnInit(): void {
  }

  updateCart(action: string){
    // if(action === "add") {
    //   const newCartItem: ICartItem =
    //     {
    //       id: uuidv4(),
    //       count: this.cartCount,
    //       product: this.product
    //     }
    //   this.cart.productList.push(newCartItem);
    // }else{
    //   this.cart.productList = this.cart.productList.filter(cartItem => cartItem.product.id !== this.product.id);
    // }
    // this.productService.updateProductList(this.cart);
  }
}

