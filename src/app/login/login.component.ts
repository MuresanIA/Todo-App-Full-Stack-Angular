import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='alex'
  password=''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.username === 'alex' && this.password === 'alex1'){
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }
}
