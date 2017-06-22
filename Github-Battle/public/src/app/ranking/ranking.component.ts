import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  players = []
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.retrieveAll()
    .then(data => {console.log(data); this.players = data;})
    .catch(err => {console.log(err);})
  }

}
