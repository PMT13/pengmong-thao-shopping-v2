import { Injectable } from '@angular/core';
import {IProduct} from "./interfaces/IProduct";
import {ICart} from "./interfaces/ICart";
import {ICartItem} from "./interfaces/ICartItem";
import {HttpService} from "./http.service";
import {StatusService} from "./status.service";
import {first, Subject} from "rxjs";
import {IAccount} from "./interfaces/IAccount";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountList!: IAccount[];
  productList!: IProduct[];
  cart!: ICart;
  cartCount: number = 0;

  $accountList: Subject<IAccount[]> = new Subject<IAccount[]>();
  $productList: Subject<IProduct[]> = new Subject<IProduct[]>();
  $cart: Subject<ICart> = new Subject<ICart>();
  $cartCount: Subject<number> = new Subject<number>();

  constructor(private httpService: HttpService, private statusService: StatusService) {
    this,this.getAccounts();
    this.getProducts();
  }

  getAccounts(){
    this.httpService.getAccounts().pipe(first()).subscribe({
      next: data => {
        this.accountList = data;
        this.$accountList.next(this.accountList);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  getProducts(){
    this.httpService.getProducts().pipe(first()).subscribe({
      next: data => {
        this.productList = data;
        this.$productList.next(this.productList);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  getCart(){
    const user = this.statusService.getUser();
    this.httpService.getCart(user.id).pipe(first()).subscribe({
      next: data => {
        this.cart = data;
        this.$cart.next(this.cart);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
