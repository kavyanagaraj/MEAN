import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  lat: number = 37.7749;
  lng: number = -122.4194;

  // address;
  // getAddress(data){
  //   console.log(data)
  // }
  
}
