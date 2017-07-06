import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core";
import {CookieService} from 'angular2-cookie/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  user;
  subscription: Subscription;
  constructor(public _httpService: HttpService, private _cookieService:CookieService, private router: Router){
  }

  logout(){
    console.log("The user is:",(this._cookieService.get("user")) );
    this._cookieService.removeAll();
    console.log("The user is empty:",(this._cookieService.get("user")) );
  }

  ngOnInit() {
    this.subscription =  this._httpService.observedUser.subscribe(
      (updatedUser) => {  this.user = updatedUser;},
			(err) => { },
      () => { }
    ) 
    // this.user = this._cookieService.get("user"); 
  }
}
