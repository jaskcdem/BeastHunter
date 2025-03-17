import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo.service';
import { Common } from '../common';

@Component({
  selector: 'app-todo-item',
  imports: [FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements AfterViewChecked {
  private common = inject(Common);
  private changeDetectorRef = inject(ChangeDetectorRef);
  @Input({ required: true }) todo!: Todo;
  @Output() remove = new EventEmitter<Todo>();
  @ViewChild('todoInputRef') inputRef?: ElementRef;

  title = '';
  editing = false;
  private editId = '';

  ngAfterViewChecked() {
    if (this.editing) {
      this.inputRef?.nativeElement.focus();
      this.changeDetectorRef.detectChanges();
    }
  }
  get inputId() {
    console.log(this.todo.title, this.editId);
    if (this.editId) return this.editId;
    let uuid = this.common.getUniqueId(1);
    this.editId = 'edit-todo-input-' + uuid;
    return this.editId;
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
    this.title = '';
  }

  handleBlur(e: Event) {
    this.editing = false;
  }
  handleFocus(e: Event) {
    this.title = this.todo.title;
  }

}
