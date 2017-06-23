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

  key:string;
  surveys = [];
  constructor(private _cookieService:CookieService, private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.key = this._cookieService.get("key")
    console.log("this.key", this.key);
    if(this.key === undefined){
      this.router.navigate(['/login']);
    }
    this._httpService.retrieveSurveys()
    .then( data => { console.log("Surveys in dasboard", data); this.surveys = data})
    .catch( err => { console.log("error in survey retrieval",err); });
  }

  logout(){
    console.log("The key is:",(this._cookieService.get("key")) );
    this._cookieService.removeAll();
    console.log("The key is empty:",(this._cookieService.get("key")) );
  }

  deleteSurvey(id){
    this._httpService.deleteSurvey({_id :id})
    .then( data => { console.log("Deleted survey", data); 
      this.router.navigate(['/dashboard']);
      this._httpService.retrieveSurveys()
      .then( data => { console.log("Surveys in dasboard", data); console.log(this._cookieService.get("key"));this.surveys = data})
      .catch( err => { console.log("error in survey retrieval",err); });
  })
    .catch( err => { console.log("error in survey retrieval",err); });
  }
}
