import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  survey_id : string;
  key : string;
  survey; vote ;
  constructor(private _route: ActivatedRoute, private _cookieService:CookieService, 
      private _httpService: HttpService, private router: Router) { 
      this._route.params.subscribe((param)=>{
        this.survey_id = param.id;
        this.retrieveOneTopic(this.survey_id);  
      })
    }

  ngOnInit() {
    this.key = this._cookieService.get("key")
    if(this.key === undefined){
      this.router.navigate(['/login']);
    }
  }

  retrieveOneTopic(surveyid){
    this._httpService.retrieveOneSurvey(surveyid)
      .then(data=>{
        this.survey = data; console.log("Single survey:",this.survey);
      })
      .catch(err=>{console.log("err in retrieving one survey", err);})
 } 
    


voteUp(option){
    this.vote = {
      surveyid : this.survey_id,
      optionIs : option
    }
    console.log("Vote in poll.ts", this.vote)
    this._httpService.upvote(this.vote)
    .then(data=>{console.log("Voted:",data); this.retrieveOneTopic(this.survey_id);})
    .catch(err=>{console.log("Failed to vote:",err);})
  }
}
