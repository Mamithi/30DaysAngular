import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../models/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any;
  newTodo: Todo = new Todo();
  editing = false;
  editingTodo: Todo = new Todo();



  constructor(
    private todoService: TodoService
    ) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  createTodo(todoForm: NgForm): void {
    console.log(this.newTodo);
    this.todoService.createTodo(this.newTodo).subscribe(
      (res) => {
        todoForm.reset();
        this.newTodo = new Todo();
        this.todos.unshift(res);
      }
    );
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id).subscribe(
      () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      }
    );
  }

  updateTodo(todoData: Todo): void {
    console.log(todoData);
    this.todoService.updateTodo(todoData).subscribe(
      (updatedTodo: any) => {
        const existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
        Object.assign(existingTodo, updatedTodo);
        this.clearEditing();
      }
    );
  }

  toggleCompleted(todoData: Todo): void {
    todoData.completed = !todoData.completed;
    this.todoService.updateTodo(todoData).subscribe(
    (updatedTodo: any) => {
      const existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
      Object.assign(existingTodo, updatedTodo);
    }
    );
  }

  editTodo(todoData: Todo): void {
    this.editing = true;
    Object.assign(this.editingTodo, todoData);
  }

  clearEditing(): void {
    this.editingTodo = new Todo();
    this.editing = false;
  }

}
