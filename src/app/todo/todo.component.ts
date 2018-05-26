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
    "Tarefa de exemplo"
  ];
  
  HandleNew(e, newTask){
    if(newTask.value != ""){
      this.tasks.push(newTask.value);
      newTask.value = "";
      e.preventDefault();
    }else{
      e.preventDefault();
    }
  }

  HandleDelete(selectedTask){
    var index = this.tasks.indexOf(selectedTask.textContent);
    this.tasks.splice(index, 1);
  }

  HandleDone(check, selectedTask){
      selectedTask.classList.toggle("done");
      check.classList.toggle("checkDone");
      console.log(selectedTask)
  }
  
  ngOnInit() {
  }

}
