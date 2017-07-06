import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import {CookieService} from 'angular2-cookie/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plan-trip',
  templateUrl: './plan-trip.component.html',
  styleUrls: ['./plan-trip.component.css']
})
export class PlanTripComponent implements OnInit {
  trip = {
    start_date : Date,
    end_date : Date,
    _days : [],
    _travellers : [],
    location : '',
    _user : ''
  }
  user;
  constructor(private _httpService: HttpService, private _cookieService:CookieService, private router: Router ) {
    
   }

  ngOnInit() {
    this._httpService.updateTrip(this.trip)
    this.user = this._cookieService.get("user")
    if(this.user === undefined){
      this.router.navigate(['/login']);
    } 
  }

  logout(){
    console.log("The user is:",(this._cookieService.get("user")) );
    this._cookieService.removeAll();
    this._httpService.updateUser(undefined);
    console.log("The user is empty:",(this._cookieService.get("user")) );
  }

}

