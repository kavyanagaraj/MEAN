import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

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
  // deleteOne(id) {
  //   return this._http.put('/items/${id}')
  //   .map( data => data.json() )
  //   .toPromise();
  // }
}
