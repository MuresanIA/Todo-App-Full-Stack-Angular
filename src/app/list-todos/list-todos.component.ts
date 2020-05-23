import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id : 1, description: 'Develop Logic Skills'},
    {id : 2, description: 'Develop Angular Skills'},
    {id : 3, description: 'Develop Rest Api'}
  ]


  // todo = {
  //   id : 1,
  //   description: 'Learn to Code'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
