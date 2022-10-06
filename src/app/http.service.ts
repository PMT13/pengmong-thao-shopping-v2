import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAccount} from "./interfaces/IAccount";
import {Observable} from "rxjs";
import {IProduct} from "./interfaces/IProduct";
import {ICart} from "./interfaces/ICart";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getAccounts(){
    return this.httpClient.get('http://localhost:3000/accounts') as Observable<IAccount[]>;
  }
  addAccount(account: IAccount){
    return this.httpClient.post('http://localhost:3000/accounts',account) as Observable<IAccount[]>;
  }

  getProducts(){
    return this.httpClient.get('http://localhost:3000/products') as Observable<IProduct[]>;
  }

  getCart(id: string){
    return this.httpClient.get('http://localhost:3000/carts/' + id) as Observable<ICart>;
  }
  updateCart(newCart: ICart){
    return this.httpClient.put('http://localhost:3000/carts/' + newCart.id, newCart);
  }

}

