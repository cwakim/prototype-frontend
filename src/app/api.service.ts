import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http'
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  /**
  * Retusns the info from the server
  *
  * @param access_token
  * @return string
  */
  public getInfo(access_token){
    let myheader = new HttpHeaders({
      Authorization: 'Bearer ' + access_token
    });

    return this.http.get(`${this.apiURL}/api/info`, {headers: myheader});
  }
}
