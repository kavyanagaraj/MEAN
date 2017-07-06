import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email : '',
    password : ''

  }

    error = ""
  constructor(private _cookieService:CookieService, private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    
  }

  login(form){
    console.log("User front end", this.user);
    this._httpService.retrieveOneUser(this.user)
    .then(data => {
      console.log("User exists", data);
      if(!data){
        this.error = "Please register"
        form.resetForm();
      }
      else if(!data.login){
        this.error = data.message;
      }
      else if(data.login){
        console.log("User exists  in login", data.user)
        this._cookieService.put("user", data.user._id);
        this._httpService.updateUser(data.user);
        // this._cookieService.get("user");
        this.router.navigate(['/dashboard']);
      }
    })
    .catch(err => {console.log("Error", err);});
  }

}


