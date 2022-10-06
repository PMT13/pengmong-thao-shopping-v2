import { Injectable } from '@angular/core';
import {IAccount} from "./interfaces/IAccount";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  isLoggedIn!: boolean;
  onCartPage!: boolean;
  user!: IAccount;

  $isLoggedIn: Subject<boolean> = new Subject<boolean>();
  $onCartPage: Subject<boolean> = new Subject<boolean>();
  $user: Subject<IAccount> = new Subject<IAccount>();

  constructor() {
    this.isLoggedIn = false;
    this.onCartPage = false;
  }

  getLoginStatus(){
    return this.isLoggedIn;
  }
  setLoginStatus(bool: boolean){
    this.isLoggedIn = bool;
    this.$isLoggedIn.next(this.isLoggedIn);
  }

  getOnCartPage(){
    return this.onCartPage;
  }
  setOnCartPage(bool: boolean){
    this.onCartPage = bool;
    this.$onCartPage.next(this.onCartPage);
  }

  getUser(){
    return this.user;
  }
  setUser(account: IAccount){
    this.user = account;
    this.$user.next(this.user);
  }
}
