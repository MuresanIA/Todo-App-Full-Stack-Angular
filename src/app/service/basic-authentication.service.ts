import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTEHNTICATED_USER ='authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);


    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTEHNTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );

  }



  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTEHNTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTEHNTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTEHNTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}

export class AuthenticationBean {
  constructor(public message) { }
}