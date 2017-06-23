import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {
@Output() createtopic = new EventEmitter();

newtopic = {
  content: '',
  description: '',
  category: ''
};
name : string

  constructor(private _cookieService:CookieService, private _httpService: HttpService) { }

  ngOnInit() {
    this.name = this._cookieService.get("key")
  }

  create(form){
    this._httpService.createTopic(this.newtopic, this.name)
    .then(data => {console.log(data); this.createtopic.emit();})
    .catch(err => {console.log(err);});
    form.resetForm();
  }

}

