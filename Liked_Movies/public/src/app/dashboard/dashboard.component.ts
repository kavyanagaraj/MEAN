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
  subscription: Subscription;
  review;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute) {
    if(!localStorage['movies']){
      this._httpService.getData()
      .then( data => { this.movies = data; console.log("Movies in dasboard", data); if(this.storageAvailable){console.log(true); localStorage.setItem("movies", JSON.stringify(data))}else{console.log(false)}})
      .catch( err => { console.log("error in getting data",err); }); 
    }
    else{
      var movies = localStorage.getItem('movies');
      if(movies){
        this.movies = JSON.parse(movies);       
      }
    }
  }

   ngOnInit(){
  }

  get_review(event: any){
    console.log("movie id is", event);
  }

  storageAvailable(type) {
    try {
        var storage = window[type],
        x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
  }
}
