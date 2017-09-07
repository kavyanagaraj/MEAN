import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  movies = [];
  subscription: Subscription;
  review;
  decade = [];
  selectedDecade;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute) {
    if(!localStorage['movies']){
      this._httpService.getData()
      .then( data => { this.movies = data; console.log("Movies in dasboard", data); console.log(this.compute_decade()); if(this.storageAvailable){console.log(true); localStorage.setItem("movies", JSON.stringify(data))}else{console.log(false)}})
      .catch( err => { console.log("error in getting data",err); }); 
    }
    else{
      var movies = localStorage.getItem('movies');
      if(movies){
        this.movies = JSON.parse(movies); 
        console.log(this.compute_decade());      
      }
    }
  }

   ngOnInit(){
  }

  get_review(id: any){
    console.log("movie id", id)
    this._httpService.retrieveReview(id)
    .then( data => { this.review = data; console.log("Review of movie", data); })
    .catch( err => { console.log("error in getting review",err); }); 
  }

  goto_url(url: string){
    window.open(url, "_blank");
  }

  compute_decade(){
    var minYear = this.movies[0].year;
    var maxYear = this.movies[0].year;
    for(var i = 0; i < this.movies.length; i++){
      if(minYear > this.movies[i].year){
        minYear = this.movies[i].year;
      }
      if(this.movies[i].year > maxYear){
        maxYear = this.movies[i];
      }
    }
    minYear = minYear - (minYear % 10);
    maxYear = maxYear - (maxYear % 10);
    for(var i = parseInt(minYear); i <= parseInt(maxYear); i += 10){
      this.decade.push(i);
    }
    return this.decade;
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
