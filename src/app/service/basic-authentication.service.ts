import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {

    if (username === 'alex' && password === 'alex1') {
      sessionStorage.setItem('authenticaterUser', username);

      return true;
    }
    return false;
  }

  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);


    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
      { headers });

  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
  }
}

export class AuthenticationBean {
  constructor(public message) { }
}