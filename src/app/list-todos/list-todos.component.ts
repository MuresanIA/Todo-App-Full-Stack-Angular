import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] 
  // = [
  //   new Todo(1, 'Develop Logic Skills', false, new Date()),
  //   new Todo(2, 'Develop Angular Skills', false, new Date()),
  //   new Todo(3, 'Develop Rest Api', false, new Date())
  //   // { id: 1, description: '' },
  //   // { id: 2, description: '' },
  //   // { id: 3, description: '' }
  // ]


  // todo = {
  //   id : 1,
  //   description: 'Learn to Code'
  // }

  constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('alex').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

}
