import { Component } from '@angular/core';
import {StatusService} from "./status.service";
import {DataService} from "./data.service";
import {first} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'shopping-website2';

  isLoggedIn: boolean =  this.status.getLoginStatus();
  onCartPage: boolean = this.status.getOnCartPage();

  constructor(private status: StatusService ,private data: DataService ) {
    this.status.$isLoggedIn.subscribe((isLoggedIn) =>
      {
        this.isLoggedIn = isLoggedIn;
      }
    );
    this.status.$onCartPage.subscribe((onCartPage) =>
      {
        this.onCartPage = onCartPage;
      }
    );
  }
}
