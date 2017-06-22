import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core";
import { HttpService } from './../http.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
	players = []; winner; loser;
	constructor(private _httpService: HttpService) {
		this.subscription = _httpService.observedPlayers.subscribe(
			(updatePlayers) => {  this.players = updatePlayers; console.log("results players", this.players)
      if(this.players[0].score > this.players[1].score){
        this.winner = this.players[0];
        this.loser = this.players[1];
      }
      else{
        this.winner = this.players[1];
        this.loser = this.players[0];
      }
    },
			(err) => { },
			() => { }
		)
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

  ngOnInit() {
  }

}
