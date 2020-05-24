import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if(username === 'alex' && password === 'alex1'){
      return true;
    }
    return false;
  }
}
