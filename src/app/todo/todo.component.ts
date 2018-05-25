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
  
  newTask(e, task){
    if(task.value != ""){
      this.tasks.push(task.value);
      task.value = "";
      e.preventDefault();
    }else{
      e.preventDefault();
    }
  }

  deleteTask(e){
    var index = this.tasks.indexOf(e.textContent);
    this.tasks.splice(index, 1);
  }

  doneTask(e){
    console.log(e);
  }
  
  ngOnInit() {
  }

}
