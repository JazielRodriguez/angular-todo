import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass'],
})
export class TodoItemComponent implements OnInit {
  @Output() deleteTodo = new EventEmitter<string>()
  @Input() todo:string = '';
  constructor() {}

  ngOnInit(): void {}
  onDeleteTodo(todo:string) {
    this.deleteTodo.emit(todo)
  }
}
