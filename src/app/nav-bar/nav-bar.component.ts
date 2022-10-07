import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {first} from "rxjs";
import {IAccount} from "../interfaces/IAccount";
import {StatusService} from "../status.service";
import {DataService} from "../data.service";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() inCart = new EventEmitter<boolean>();
  @Output() onLog = new EventEmitter<boolean>();
  isLoggedIn: boolean = this.status.getLoginStatus();
  searchText: string = "";
  cartSize: number = this.data.getCartSize();
  user: IAccount = this.status.getUser();

  constructor(private status: StatusService ,private data: DataService, private httpService: HttpService) {
    this.status.$isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
    this.status.$user.subscribe((user) => {
      this.user = user;
    });
    this.data.$cartSize.subscribe((count) => {
      this.cartSize = count;
    });
  }

  ngOnInit(): void {
  }

  onSearchTextChange(){

  }

  goToCart(){
    this.status.setOnCartPage(true);
  }

  goToProducts(){
    this.status.setOnCartPage(false);
  }

  logout(){
    this.status.setLoginStatus(false);
    this.status.setOnCartPage(false);
  }
}
