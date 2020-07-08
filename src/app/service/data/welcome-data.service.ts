import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('https://todo-app7-backend.herokuapp.com/hello-world-bean');
    
  }

  executeHelloWorldServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(
      `https://todo-app7-backend.herokuapp.com/hello-world/path-variable/${name}`,
      
      );
   
  }

}
