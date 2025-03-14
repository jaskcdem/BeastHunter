import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-header',
  imports: [FormsModule],
  templateUrl: './todo-header.component.html',
  styleUrl: './todo-header.component.css'
})
export class TodoHeaderComponent {
  private todoService = inject(TodoService);
  title = '';
  addTodo() {
    if (this.title) {
      this.todoService.addItem(this.title);
      // Reset title to clear input field.
      this.title = '';
    }
  }
}
