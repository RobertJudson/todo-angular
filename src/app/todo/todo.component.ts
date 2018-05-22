import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common/src/directives/ng_for_of';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  
  constructor() {
  }

  public tasks = [
    "Tarefa de exemplo TASK 1"
  ];
  
  newTask(done, task){
    this.tasks.push(task);
  }

  // TASK 2

  public tasks2 = [
    "Tarefa de exemplo TASK 2"
  ];
  
  newTask2(done, task){
    this.tasks2.push(task);
  }
  
  ngOnInit() {
  }

}
