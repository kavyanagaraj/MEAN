import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core";

@Component({
  selector: 'app-add-traveller',
  templateUrl: './add-traveller.component.html',
  styleUrls: ['./add-traveller.component.css']
})
export class AddTravellerComponent implements OnInit, OnDestroy {
  trip = { _travellers : []}; travellers = [];
  subscription: Subscription;
  constructor(private _httpService: HttpService) { 
   this.subscription =  _httpService.observedTrip.subscribe(
			(updatedTrip) => {  this.trip = updatedTrip;},
			(err) => { },
			() => { }
		)
  }

  ngOnInit() {
  }

  updateTrip(){
    this.trip._travellers.push(this.travellers[0]);
    console.log("In update trip")
    this._httpService.updateTrip(this.trip);
    this.travellers = []
  }

  ngOnDestroy() {
		this.subscription.unsubscribe();
	}

    addTraveller(){
      var person = new Traveller()
      this.travellers.push(person);
      // this.trip._travellers.push(person);
  }
}
class Traveller{
  email : string = '';
}