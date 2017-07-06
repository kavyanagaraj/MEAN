import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user;
  constructor(private _cookieService:CookieService, private _httpService: HttpService, private router: Router) { }
  trips;
  ngOnInit() {
    this.user = this._cookieService.get("user");
    this._httpService.updateUser(this.user);
    if(this.user === undefined){
      this.router.navigate(['/login']);
    }

    this._httpService.retrieveTrips()
    .then((data) => { console.log("Trips from db", data); this.trips = data})
    .catch((err) => {console.log("Error retrieving trips")})
  }

  logout(){
    console.log("The key is:",(this._cookieService.get("key")) );
    this._cookieService.removeAll();
    this._httpService.updateUser(undefined);
    console.log("The key is empty:",(this._cookieService.get("key")) );
  }

}
