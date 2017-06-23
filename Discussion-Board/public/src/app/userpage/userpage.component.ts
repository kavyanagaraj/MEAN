import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  username : string; user;
  constructor(private _route: ActivatedRoute, private _cookieService:CookieService, 
      private _httpService: HttpService, private router: Router) { 
        this._route.params.subscribe((param)=>{
        console.log("Params user name", param.name);
        this.username = param.name;
        this.retrieveUser(this.username);  
      })
    }

  ngOnInit() {
  }
  retrieveUser(name){
  this._httpService.retrieveUser(name)
    .then(data=>{console.log("the user:",data); this.user = data;})
    .catch(err=>{console.log("Failed to retrieve user:",err);})
  }
}
