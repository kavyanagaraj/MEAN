import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topicdetails',
  templateUrl: './topicdetails.component.html',
  styleUrls: ['./topicdetails.component.css']
})
export class TopicdetailsComponent implements OnInit {
  currtopic = {};
  post ={content: '', _topic: ""};
  comment ={content : '', _post: ''};

  constructor(private _route: ActivatedRoute, private _cookieService:CookieService, 
      private _httpService: HttpService, private router: Router) { 
      this._route.params.subscribe((param)=>{
        console.log("Params topic id", param.id);
          this._httpService.retrieveOneTopic(param.id)
          .then(data=>{
            this.currtopic = data; console.log("Topic:",this.currtopic);
          })
          .catch(err=>{console.log("err in retrieving one topic", err);})
      })
 }
  addPost(form){
    this.post._topic = this.currtopic[0]._id
    this._httpService.createPost(this.post, this._cookieService.get("key"))
    .then(data=>{console.log("the new post:",data);})
    .catch(err=>{console.log("Failed to add:",err);})
    form.resetForm();
  }

  ngOnInit() {
    
    
  }

}
