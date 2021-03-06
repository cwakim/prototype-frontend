import { Injectable } from '@angular/core';
import { User } from './users';
import { HttpParams, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  /**
  * Calls the login api from the server and returns the response
  * @param username
  * @param password
  * @return HttpClient
  */
  public getAccess(username, password){
    let params = new HttpParams();
    params = params.set('client_id', environment.client_id);
    params = params.set('client_secret', environment.client_secret);
    params = params.set('grant_type', 'password');
    params = params.set('username', username);
    params = params.set('password', password);
    params = params.set('scope', '*');

    return this.http.post(`${environment.api_url}/oauth/token`, params).pipe(
      retry(1),
      catchError(error => {
        return [{error: true, message: error.message}];
      })
    );
  }

  /**
  * Calls the register api from the server and returns the response
  * @param name
  * @param email
  * @param password
  * @param c_password
  * @return HttpClient
  */
  public registerUser(name, email, password, c_password){
    let params = new HttpParams();
    params = params.set('name', name);
    params = params.set('password', password);
    params = params.set('c_password', c_password);
    params = params.set('email', email);

    return this.http.post(`${environment.api_url}/api/register`, params)
      .pipe(
        retry(1),
        catchError(error => {
          return [{error: true, message: error.message}];
        })
      );
  }

}
