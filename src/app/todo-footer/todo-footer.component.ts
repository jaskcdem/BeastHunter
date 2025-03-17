import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-footer',
  imports: [],
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent {
  private location = inject(Location);
  private todoService = inject(TodoService);
  get todos() {
    return this.todoService.getItems();
  }
  get todosDone() {
    return this.todoService.getItems('completed');
  }
  get todosUndone() {
    return this.todoService.getItems('active');
  }
  get filter(): string {
    return this.location.path().split('/')[2] || 'all';
  }
  clearCompleted() {
    this.todoService.clearCompleted();
  }
  setFilter(filter: string): void {
    this.location.go(`/todo/${filter}`);
  }
}
