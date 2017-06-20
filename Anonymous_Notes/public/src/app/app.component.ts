import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  notes = [];
  constructor(private _httpService: HttpService) { 
    this._httpService.retrieveAll()
    .then( notes => { console.log("notes", notes); this.notes = notes; })
    .catch( err => { console.log("err", err); })
  }

  updateNote(data){
    console.log("data", data);
    this.notes = data
  }
}
