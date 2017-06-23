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
  key : string;
  currtopic;
  post ={content: '', _topic: ""};
  comment ={content : '', _post: ''};
  votepost = {}
  topic_id;
  constructor(private _route: ActivatedRoute, private _cookieService:CookieService, 
      private _httpService: HttpService, private router: Router) { 
      this._route.params.subscribe((param)=>{
        this.topic_id = param.id;
        this.retrieveOneTopic(this.topic_id);  
      })
    }
    
  retrieveOneTopic(topicid){
    this._httpService.retrieveOneTopic(topicid)
          .then(data=>{
            this.currtopic = data; console.log("Topic:",this.currtopic);
          })
          .catch(err=>{console.log("err in retrieving one topic", err);})
  } 
  addPost(form){
    this.post._topic = this.currtopic[0]._id
    this._httpService.createPost(this.post, this._cookieService.get("key"))
    .then(data=>{console.log("the new post:",data);})
    .catch(err=>{console.log("Failed to add:",err);})
    form.resetForm();
  }

  downvote(postid){
    this.votepost = {
      postid : postid,
      user : this._cookieService.get("key")
    }
    this._httpService.downvote(this.votepost)
    .then(data=>{console.log("the new post:",data); this.retrieveOneTopic(this.topic_id)})
    .catch(err=>{console.log("Failed to add:",err);})
  }

  upvote(postid){
    this.votepost = {
      postid : postid,
      user : this._cookieService.get("key")
    }
    this._httpService.upvote(this.votepost)
    .then(data=>{console.log("the new post:",data); this.retrieveOneTopic(this.topic_id);})
    .catch(err=>{console.log("Failed to add:",err);})
  }

  addComment(form, comment, postid){
    this.comment.content = comment;
    this.comment._post = postid
    console.log("comment from form", comment)
    console.log("add comment", this.comment);
    this._httpService.createComment(this.comment, this._cookieService.get("key"))
    .then(data=>{console.log("the new comment:",data); this.retrieveOneTopic(this.topic_id);})
    .catch(err=>{console.log("Failed to add:",err);})
    form.resetForm();
  }

  ngOnInit() {
    this.key = this._cookieService.get("key")
    if(this.key === undefined){
      this.router.navigate(['/login']);
    }
    
  }

}
