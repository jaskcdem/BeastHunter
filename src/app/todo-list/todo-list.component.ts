import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Todo, TodoService } from '../todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoHeaderComponent } from '../todo-header/todo-header.component';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
import { RouterOutlet } from '@angular/router';
import { BackhomeComponent } from '../backhome/backhome.component';

@Component({
  selector: 'app-todo-list',
  imports: [RouterOutlet, TodoItemComponent, TodoHeaderComponent, TodoFooterComponent, BackhomeComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  private location = inject(Location);
  private todoService = inject(TodoService);

  get todos(): Todo[] {
    const filter = this.location.path().split('/')[2] || 'all';
    return this.todoService.getItems(filter);
  }

  get activeTodos(): Todo[] {
    return this.todoService.getItems('active');
  }

  onRemove(todo: Todo): void {
    this.todoService.removeItem(todo);
  }

  toggleAll(e: Event) {
    const input = e.target as HTMLInputElement;
    this.todoService.toggleAll(input.checked);
  }
}
