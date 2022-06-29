import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  todos: string[] = [
    'Learn Angular',
    'Learn React',
    'Learn Vue',
    'Learn Svelte'
  ];
  onDeleteTodo(deletedTodo: string) {
    this.todos.filter((todo) => deletedTodo !== todo);
  }
}
