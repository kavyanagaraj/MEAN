import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
@Output() addedNote = new EventEmitter();

 note = {
    content : ''
  };
  constructor(private _httpService: HttpService) { 
  }

  create(form){
    console.log(this.note);
    this._httpService.create(this.note)
    .then( notes => { console.log(notes); 
    this._httpService.retrieveAll()
    .then( notes => { console.log("notes", notes); this.addedNote.emit(notes)})
    .catch( err => { console.log(err); }) })
    .catch( err => { console.log(err); })
    this.note = {
      content : ''
    }
    form.resetForm();
  }
  

  ngOnInit() {
  }


}
