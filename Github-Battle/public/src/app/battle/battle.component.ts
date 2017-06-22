import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  user1 = {username: "", error: false}; user2 = {username: "", error: false};
  url = "";
  players = [];
  player1 = new Player(); player2 = new Player(); player1exists = false; player2exists = false;
  constructor(private _httpService: HttpService){}

  ngOnInit() {
  }

  getUser(user){    
    console.log(user)
    this.url = 'https://api.github.com/users/' + user.username
    this._httpService.retrieveUser(this.url)
    .then( tasks => { console.log(tasks); 
      console.log("user1", this.user1);
    console.log("user2", this.user2);
      if(user == this.user1){
        this.user1.error = false;
        this.player1.name  = tasks.login;
        this.player1.avatar_url = tasks.avatar_url
        this.player1.score = (tasks.public_repos + tasks.followers) * 12; 
        console.log("Player 1", this.player1);
        this.player1exists = true;
      }else{
        this.user2.error = false;
        this.player2.name  = tasks.login;
        this.player2.avatar_url = tasks.avatar_url
        this.player2.score = (tasks.public_repos + tasks.followers) * 12; 
        console.log("Player 2", this.player2);
        this.player2exists = true;
      }; })
    .catch( err => { console.log("err", err); 
      if(user == this.user1){
        this.user1.error = true;
      }
      else{
        this.user2.error = true;
      }
    })
  }

  updatePlayers(){
    this.players.push(this.player1);
    this.players.push(this.player2);
    this._httpService.updatePlayers(this.players);
    this._httpService.create(this.player1)
    .then(data => {console.log(data);})
    .catch(err => {console.log(err);})
    this._httpService.create(this.player2)
    .then(data => {console.log(data);})
    .catch(err => {console.log(err);})
  }
}

export class Player{
  name : string;
  avatar_url : string;
  score : number;
}
