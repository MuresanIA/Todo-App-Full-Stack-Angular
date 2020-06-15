import { WelcomeDataService } from './../service/data/welcome-data.service';
import { ActivatedRoute } from '@angular/router';



import { Component, OnInit } from '@angular/core';//'./app.component';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService:string
  name = ''
  
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { 

  }

  
  ngOnInit(){
    
    this.name = this.route.snapshot.params['name'];
    
  }

  getWelcomeMessage() {
    
    
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
  }

  getWelcomeMessageWithParameter() {
   
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
  }


  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
    
  }

  handleErrorResponse(error) {
    
    this.welcomeMessageFromService = error.error.message
  }
}

export class Class1 {

}

export class Class2 {
  
}
