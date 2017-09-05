import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies;
  review;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute) {
      this._httpService.getData()
      .then( data => { this.movies = data; console.log("Movies in dasboard", data); if(this.storageAvailable){console.log(true); localStorage.setItem("movies", JSON.stringify(data))}else{console.log(false)}})
      .catch( err => { console.log("error in getting data",err); }); 
  }

   ngOnInit(){
  }
}
