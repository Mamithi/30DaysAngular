import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(this.baseUrl + '/api/todos')
    .pipe(
      catchError(this.handleError)
    );
  }

  createTodo(todoData: Todo) {
    return this.http.post(this.baseUrl + '/api/todos/', todoData)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTodo(id: string) {
    return this.http.delete(this.baseUrl + '/api/todos/' + id).pipe(
      catchError(this.handleError)
    );
  }

  updateTodo(todoData: Todo) {
    return this.http.put(this.baseUrl + '/api/todos/' + todoData.id, todoData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Some error occured', error);
    return throwError(error || 'Server Error');
  }
}
