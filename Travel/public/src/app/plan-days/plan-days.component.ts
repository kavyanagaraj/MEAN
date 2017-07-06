import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core";
import {CookieService} from 'angular2-cookie/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plan-days',
  templateUrl: './plan-days.component.html',
  styleUrls: ['./plan-days.component.css']
})
export class PlanDaysComponent implements OnInit, OnDestroy {
  trip = {
    _days : [],
    _travellers : [],
    _user : '',
    location : ''
  }
  locationAuto;
  days = 0;
  dateerror = '';
  subscription: Subscription;
  numTravellers;
  numError;
  user; today;
  constructor(public _httpService: HttpService, private _cookieService:CookieService, private router: Router) { }

  ngOnInit() {
   this.subscription =  this._httpService.observedTrip.subscribe(
      (updatedTrip) => {  this.trip = updatedTrip;},
			(err) => { },
			() => { }
    )   

    this.user = this._cookieService.get("user")
    console.log("this.user in plan-days.ts", this._cookieService.get("user"));
    if(this.user === undefined){
      this.router.navigate(['/login']);
    } 

     this.today = Date.now() 
  }


  calculatedays(start, end){
    var date1 = Date.parse(start)
    var date2 = Date.parse(end)
    // var backDate = (date1-this.today)/(1000*60*60*24) + 1
    // if(backDate < 0){
    //   console.log("Here")
    //   this.dateerror = 'Plan a future trip'
    // }
    // else{
    //   this.dateerror = ''
    // }
    console.log((date1-this.today)/(1000*60*60*24) + 1);
    this.days = (date2-date1)/(1000*60*60*24) + 1
    if(this.days <= 0 ){
      this.dateerror = 'Please enter valid date'
    }
    else{
      if(this.trip._days.length > this.days){
        this.trip._days.length = this.days
      }
      else{
        for(var i = this.trip._days.length; i < this.days; i++){
          var day = new Day();
          this.trip._days.push(day);
          // this.daysArr.push("");
        }
      }
      this.dateerror = '';
    }
    console.log("Number of days", this.days)
  }


  updateTrip(){
    console.log("In update trip")
    this._httpService.updateTrip(this.trip);
  }
  

  addTravellers(){
    console.log("Number", this.numTravellers);
    if(this.numTravellers < 0 ){
      this.numError = 'Please enter a valid number'
    }
    else{
      if(this.trip._travellers.length > this.numTravellers){
        this.trip._travellers.length = this.numTravellers
      }
      else{
        for(var i = this.trip._travellers.length; i < this.numTravellers; i++){
          var person = new Traveller()
          this.trip._travellers.push(person);
          // this.daysArr.push("");
        }
      }
      this.numError = '';
    }
  }

  createTrip(form){
    this.trip._user = this.user;
    this.trip.location = this.locationAuto;
    console.log("Creating trip", this.trip);
    this._httpService.createTrip(this.trip)
    .then((data) => {console.log("Added trip", data); this.router.navigate(['/dashboard']);})
    .catch((err) => console.log("Error while adding trip", err))
  }

  getAddress(data){
    console.log(data);
    this.locationAuto = data.name;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }     

}
class Traveller{
  email : string = '';
}

class Day{
  note : string = '';
}