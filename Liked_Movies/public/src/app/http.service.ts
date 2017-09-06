import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  getData(){
    return this._http.get('/movies')
    .map(data => data.json())
    .toPromise();
  }

  retrieveReview(id){
    return this._http.get(`/review/${id}`)
    .map(data => data.json())
    .toPromise();
  }

  createUser(user) {
    return this._http.post(`/user`, user)
    .map( data => data.json() )
    .toPromise();
  }
}
