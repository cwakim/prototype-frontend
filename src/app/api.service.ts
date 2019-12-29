import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http'
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  public getInfo(access_token){
    let myheader = new HttpHeaders({
      Authorization: 'Bearer ' + access_token
    });

    return this.http.get(`${this.apiURL}/api/info`, {headers: myheader});
  }
}
