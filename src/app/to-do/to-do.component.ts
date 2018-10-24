import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../ToDoItem';
import { TODOS } from '../mock-ToDos';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {


  //TheToDos = TODOS;
  TheToDOs: ToDoItem[];

  selectedToDoItem: ToDoItem;

  getToDos(): void {
    this.myTodoServiceService.getAllTodos().subscribe((todoData: ToDoItem[]) => {
      this.TheToDOs = todoData;
    })
  }

  addNew(iTtitle: string, iPriority: number, iDetail: string): void {
    iTtitle = iTtitle.trim();
    if (!iTtitle) { return; }
    iDetail = iDetail.trim();
    var newItem: ToDoItem = { title: iTtitle, detail: iDetail, priority: iPriority, id: 3 };
    this.myTodoServiceService.insertTodo(newItem as ToDoItem)
      .subscribe(oneToDo => {
        this.TheToDOs.push(oneToDo);  // adds the new one to our local array
      });
  }


  onSelect(PassedInToDoItem: ToDoItem): void {
    this.selectedToDoItem = PassedInToDoItem;
  }


  constructor(private myTodoServiceService: TodoServiceService) { }

  ngOnInit() {
    this.getToDos();
  }

}
