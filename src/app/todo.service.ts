import { Injectable } from '@angular/core';
export interface Todo {
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private static instance: TodoService;

  private constructor() {
    this.todos = [];
  }

  static getInstance(): TodoService {
    if (!TodoService.instance) {
      TodoService.instance = new TodoService();
    }
    return TodoService.instance;
  }

  todos: Todo[] = [];

  addItem(title: string): void {
    const todo: Todo = {
      title,
      completed: false,
    };
    this.todos.push(todo);
  }

  removeItem(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  toggleAll(completed: boolean): void {
    this.todos = this.todos.map((todo) => ({ ...todo, completed }));
  }

  getItems(type = 'all'): Todo[] {
    switch (type) {
      case 'active':
        return this.todos.filter((todo) => !todo.completed);
      case 'completed':
        return this.todos.filter((todo) => todo.completed);
    }
    return this.todos;
  }
}
