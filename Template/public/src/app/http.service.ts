import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  createUser(user) {
    return this._http.post(`/user`, user)
    .map( data => data.json() )
    .toPromise();
  }

  retrieveAll() {
    return this._http.get(`/items`)
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
}
