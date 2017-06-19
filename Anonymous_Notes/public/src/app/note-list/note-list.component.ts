import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
notes = []
 note = {
    content : ''
  };
  constructor(private _httpService: HttpService) { 
  }

  create(){
    console.log(this.note);
    this._httpService.create(this.note)
    .then( notes => { console.log(notes); 
    this._httpService.retrieveAll()
    .then( notes => { console.log("notes", notes); this.notes = notes})
    .catch( err => { console.log(err); }) })
    .catch( err => { console.log(err); })
  }
  ngOnInit() {
  }

}
