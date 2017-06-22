import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs'

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  retrieveUser(url) {
    return this._http.get(url).map(data=>data.json()).toPromise()
  }

  retrieveAll() {
    return this._http.get(`/players`)
    .map( data => data.json() )
    .toPromise();
  }
  create(item) {
    return this._http.post(`/players`, item)
    .map( data => data.json() )
    .toPromise();
  }
  retrieveOne(id) {
    return this._http.get(`/items/${id}`)
    .map( data => data.json() )
    .toPromise();
  }
  update(item, id) {
    return this._http.put(`/items/${id}`, item)
    .map( data => data.json() )
    .toPromise();
  }

  observedPlayers = new BehaviorSubject(null);
  updatePlayers(players: any) {
    this.observedPlayers.next(players);
  }
  
}
