import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from './ToDoItem';

@Injectable({ providedIn: 'root' })
export class TodoServiceService {
  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<ToDoItem[]> {
    return this.http.get<ToDoItem[]>('http://localhost:3000/todo/api/todo');
  }
  
  insertTodo(newToDo: ToDoItem): Observable<ToDoItem> {
    return this.http.post<ToDoItem>('http://localhost:3000/todo/api/todo/', newToDo);
   }
   
}