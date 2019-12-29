import { Injectable } from '@angular/core';
import { User } from './users';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http'
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  apiURL: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  public getAccess(username, password){
    let params = new HttpParams();
    params = params.set('client_id', environment.client_id);
    params = params.set('client_secret', environment.client_secret);
    params = params.set('grant_type', 'password');
    params = params.set('username', username);
    params = params.set('password', password);
    params = params.set('scope', '*');

    return this.http.post(`${this.apiURL}/oauth/token`, params);
  }

  public registerUser(name, email, password, c_password){
    let params = new HttpParams();
    params = params.set('name', name);
    params = params.set('password', password);
    params = params.set('c_password', c_password);
    params = params.set('email', email);

    return this.http.post(`${this.apiURL}/api/register`, params);
  }

}
