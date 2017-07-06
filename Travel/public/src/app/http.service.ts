import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs'

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  createUser(user) {
    return this._http.post(`/user`, user)
    .map( data => data.json() )
    .toPromise();
  }

  createTrip(trip) {
    return this._http.post(`/trip`, trip)
    .map( data => data.json() )
    .toPromise();
  }

  retrieveTrips() {
    return this._http.get(`/trip`)
    .map( data => data.json() )
    .toPromise();
  }

  retrieveOneUser(user) {
    return this._http.post(`/user/login`, user)
    .map( data => data.json() )
    .toPromise();
  }

  
  create(item) {
    return this._http.post(`/items`, item)
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
  deleteOne(item, id) {
    return this._http.put('/items/${id}', item)
    .map( data => data.json() )
    .toPromise();
  }

  observedTrip = new BehaviorSubject(null);
  updateTrip(trip: any) {
    this.observedTrip.next(trip);
  }

  observedUser = new BehaviorSubject(null);
  updateUser(user: any) {
    this.observedUser.next(user);
  }
}

