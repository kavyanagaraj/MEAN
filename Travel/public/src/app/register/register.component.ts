import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newuser = {
    username : '',
    email : '',
    password : '',
    confirmpw : ''
  }
  user ;
  error : string;
  constructor(private _cookieService:CookieService, private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  register(form){
    this.user = {
      username : this.newuser.username,
      email : this.newuser.email,
      password : this.newuser.password
    }
    this._httpService.createUser(this.user)
    .then(data => {console.log("Data when trying to create user", data);
      if(!data.register){
        this.error = data.message
        form.resetForm();
      }
      else{
        console.log(data.register);
        this._cookieService.put("user", data.user._id);
        this._httpService.updateUser(data.user);
        this.router.navigate(['/dashboard']);  
      }
   })
    .catch(err => {console.log("Error creating user", err);});  
  }

}
