import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  imports: [FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements AfterViewChecked {
  @Input({ required: true }) todo!: Todo;
  @Output() remove = new EventEmitter<Todo>();
  @ViewChild('editField') inputRef?: ElementRef;

  title = '';
  editing = false;

  ngAfterViewChecked() {
    if (this.editing) {
      this.inputRef?.nativeElement.focus();
    }
  }

  onToggle() {
    this.todo.completed = !this.todo.completed;
  }

  onRemove() {
    this.remove.emit(this.todo);
  }

  onEdit() {
    this.editing = true;
  }

  onSave() {
    if (!this.title) this.remove.emit(this.todo);
    else this.todo.title = this.title;
    this.editing = false;
  }

  handleBlur(e: Event) {
    this.editing = false;
  }
  handleFocus(e: Event) {
    this.title = this.todo.title;
  }

}
